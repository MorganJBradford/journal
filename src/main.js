import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Entry } from './journal.js';

$("form#journal-entry").submit(function(event) {
  event.preventDefault();
  new Entry();
  console.log("Entry submitted successfully.");
});