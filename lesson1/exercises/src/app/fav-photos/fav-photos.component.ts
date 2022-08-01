import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Photos';
  image1 = 'https://i.ytimg.com/vi/mRf3-JkwqfU/sddefault.jpg';
  image2 = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg ';
  image3 = 'https://iheartdogs.com/wp-content/uploads/2019/01/siberian_husky.training_120476149_251778649544863_6165880252359897080_n-e1601592765529.jpg';

  constructor() { }

  ngOnInit() {
  }

}