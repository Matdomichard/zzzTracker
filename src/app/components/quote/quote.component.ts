import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../../services/quote.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quote: string = '';
  author: string = '';

  constructor(private quoteService: QuoteService) {}

  ngOnInit() {
    this.loadRandomQuote('fr');
  }

  loadRandomQuote(lang: string) {
    this.quoteService.getRandomQuote(lang).subscribe((data) => {
      this.quote = data.content;
      this.author = data.author;
    });
  }
}
