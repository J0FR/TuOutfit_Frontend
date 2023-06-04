import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OutfitService } from '../outfit.service';
import { OutfitFormData } from './outfit-form-data';
import { OutfitDetail } from '../outfitDetail';

@Component({
  selector: 'app-outfit-create',
  templateUrl: './outfit-create.component.html',
  styleUrls: ['./outfit-create.component.css']
})
export class OutfitCreateComponent implements OnInit {

  miOutfit = new OutfitFormData(
    '', 0, '', '', '', '', '', '', ''
  );

  @ViewChild('prendasInput', { static: false }) prendasInput: ElementRef = new ElementRef('');

  outfits = Array <OutfitDetail>();
  private idOutfit = localStorage.getItem('idOutfit');
  private idUsuarioNumber = Number(this.idOutfit);

  constructor(
    private route: ActivatedRoute,
    private outfitService: OutfitService
  ) { }

  getOutfits(): void {
    this.outfitService.getOutfits().subscribe((outfits) => {
      this.outfits = outfits;
    });
  }

  onFormSubmit() {
    const formData = JSON.stringify(this.miOutfit);

    console.log(formData);

    this.outfitService.createOutfits(formData).subscribe((outfit) => {
        localStorage.setItem('idOutfit', outfit.id.toString());
        console.log(outfit.id);

        this.idOutfit = localStorage.getItem('idOutfit');
        this.idUsuarioNumber = Number(this.idOutfit);

        var str = this.getCurrentValue();
        let myArray = str.split(',');
        console.log(myArray);

        for (let i = 0; i < myArray.length; i++) {
          let num = Number(myArray[i]);
          this.outfitService.postAgregarUnaPrendaOutfit(this.idUsuarioNumber, num).subscribe((res) => {
            console.log(`Prenda with id ${num} added to Outfit with id ${this.idUsuarioNumber}`);
          }, error => {
            console.log('Error adding prenda to outfit', error);
          });

          console.log(num);
        }
      }
    );
  }


  getCurrentValue() {
    return this.prendasInput.nativeElement.value;
  }

  ngOnInit() {
    this.getOutfits();
  }
}
