import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "./service/product.service";

@Component({
  selector: 'app-aanbiedenpagina',
  templateUrl: './aanbiedenpagina.component.html',
  styleUrls: ['./aanbiedenpagina.component.css']
})
export class AanbiedenpaginaComponent implements OnInit {
  productForm = new FormGroup(
    {
      productNaam: new FormControl(''),
      categorie: new FormControl(''),
      omschrijving: new FormControl(''),
      prijs: new FormControl(''),
      bijlage: new FormControl(''),
      verzendmethode: new FormControl('')
    }
  );

  categorieen;
  showCategorieen: boolean;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.categorieen = this.productService.getCategorieen();
  }

  onSubmit() {
    console.warn(this.productForm.value)
    this.productService.plaatsTeVerkopenProduct(this.productForm.value)
      .subscribe(
        response => console.log("Succes!"),
        error => console.error("Error!")
      );
  }

  toggleShowCategorieen() {
    this.showCategorieen = !this.showCategorieen;
  }
}
