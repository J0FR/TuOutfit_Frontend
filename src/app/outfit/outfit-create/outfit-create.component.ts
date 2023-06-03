import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OutfitService } from '../outfit.service';
import { OutfitFormData } from './outfit-form-data';

@Component({
  selector: 'app-outfit-create',
  templateUrl: './outfit-create.component.html',
  styleUrls: ['./outfit-create.component.css']
})
export class OutfitCreateComponent implements OnInit {

  miOutfit = new OutfitFormData(
    '', 0, '', '', '', '', '', '', ''
  );

  constructor(
    private route: ActivatedRoute,
    private outfitService: OutfitService
  ) { }

  onFormSubmit() {
    console.log("Voy por aquí");

    const formData = JSON.stringify(this.miOutfit);

    console.log(formData);

    this.outfitService.createOutfits(formData).subscribe((outfit) => {
        console.log(outfit);
      }
    );
  }

  ngOnInit() {

  }
}
