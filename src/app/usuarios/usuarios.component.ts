import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-usuarios",
  templateUrl: "./usuarios.component.html",
  styleUrls: ["./usuarios.component.css"]
})
export class UsuariosComponent implements OnInit {
  usuarios: any = [];

  imagemLargura = 50;
  imagemMargem = 2;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getEventos();
  }

  getEventos() {
    this.http.get("http://localhost:5000/api/usuario").subscribe(
      response => {
        this.usuarios = response;
      },
      error => {
        console.log(error);
      }
    );
  }
}
