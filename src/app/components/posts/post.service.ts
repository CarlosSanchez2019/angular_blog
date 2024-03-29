import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { PostI } from '../shared/models/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postsCollection: AngularFirestoreCollection<PostI>;

  constructor(private afs: AngularFirestore ) {
    this.postsCollection = afs.collection<PostI>('post')
  }

  public getAllPost(): Observable<PostI[]>{
    return this.postsCollection
    .snapshotChanges()
    .pipe(
      map(actions => 
        actions.map(a => {
          const data = a.payload.doc.data() as PostI;
          const id = a.payload.doc.id;
          return {id, ...data}
        })
        
        )
    )
  }

  public getOnePost(id: PostI): Observable<PostI> {
    return this.afs.doc<PostI>(`post/${id}`).valueChanges()
  }

  public deletePostById(post : PostI){
    return this.postsCollection.doc(post.id)
      .delete()
  }

  public editPostById(post: PostI){
    return this.postsCollection.doc(post.id)
      .update(post);
  }

}
