import { Component, OnInit } from '@angular/core';

@Component({
    selector: "footer-comp",
    templateUrl: "./footer.component.html",
    styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
    title: string = "this is the footer";
    ngOnInit(){}
}