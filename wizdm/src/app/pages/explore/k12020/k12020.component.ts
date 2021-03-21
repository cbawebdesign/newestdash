import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { query, stream, onSnapshot, where, orderBy, limit, endBefore, docs, snap } from '@wizdm/connect/database/collection/operators';
import { DatabaseGroup, QueryDocumentSnapshot } from '@wizdm/connect/database/collection';
import { DatabaseService } from '@wizdm/connect/database';
import { PostData } from 'app/pages/explore/feed/post/post.component';
import { filter, take, map, expand, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { EmojiUtils } from '@wizdm/emoji/utils';
import { MediaObserver } from '@angular/flex-layout';
import { UserProfile, UserData } from 'app/utils/user';

@Component({
  selector: 'wm-k12020',
  templateUrl: './k12020.component.html',
  styleUrls: ['./k12020.component.scss']
})
export class k12020Component extends DatabaseGroup<PostData> {

  readonly posts$: Observable<QueryDocumentSnapshot<PostData>[]>;

  // Media queries to switch between desktop/mobile views
  public get mobile(): boolean { return this.media.isActive('xs'); }
  public get desktop(): boolean { return !this.mobile; }


  constructor (db: DatabaseService, private utils: EmojiUtils,
    private media: MediaObserver, public user: UserProfile<UserData>,) {

    super(db, 'posts');

    /** 
     * We de-structure the stream() operator gainng finer access control to the data coming from the database
     */
    this.posts$ = this.pipe(

      // Query for the public posts in descending order by creation date
      // where('tags', 'array-contains', 'test1'),
      where('tags', '==', this.userFirstName),
      where('test', 'array-contains', 'new'),

      // Custom operator
      source => source.pipe(

        // Let's read up to 50 old posts
        limit(50), snap(),

        // Let's pre-pend the new posts
        expand(oldOnes => source.pipe(

          // Streams the latest document snapshot
          endBefore(oldOnes[0]), onSnapshot(this.db.zone),

          // Filters out not only the empty emissions but also the local ones (still having pending writes).
          filter(newOnes => newOnes.size > 0 && !newOnes.metadata.hasPendingWrites),

          // Extracts the document snapshots from the query snapshot and proceedes
          docs(), take(1),

          map(newOnes => newOnes.concat(oldOnes))
        ))
      )
    );
  }

  public get userImage(): string {
    return this.user.data.photo || '';
  }

  public get userFirstName(): string {
    let displayName = this.user?.data?.userName?.split('-').slice().pop();
    return displayName || '';
  }


}
