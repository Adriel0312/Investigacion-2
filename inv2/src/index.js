import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import $ from 'jquery';
import App from './App';
ReactDOM.render(<App />, document.getElementById('root'));



$(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myTable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });