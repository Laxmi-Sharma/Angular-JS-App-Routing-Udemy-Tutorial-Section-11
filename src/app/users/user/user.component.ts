import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramSubscription : Subscription;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
  this.user={
    id:this.route.snapshot.params['id'],
    name:this.route.snapshot.params['name']
  };
  this.paramSubscription = this.route.params.subscribe(
    (param:Params)=>{
      this.user.id=param['id'];
      this.user.name=param['name'];
    }
  );
  }

  ngOnDestroy(){
    //we don't need to do this manually as
    // it is handled by Angular. However, we will need to do this once we create our own observables.
    this.paramSubscription.unsubscribe();
  }

}
