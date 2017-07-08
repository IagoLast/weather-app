import Autosuggest from 'react-autosuggest';
import React, { Component } from 'react';
import RecentService from './recent.service';
import './search.css'

const renderSuggestion = suggestion => (
  <div>
    { suggestion.nm }
  </div>
);

const getSuggestionValue = suggestion => suggestion.nm;

export default class Search extends Component {
  onSuggestionsFetchRequested({value}) {
    this.props.filterSuggestions(value);
  }

  onSuggestionsClearRequested() {
    this.props.clearSuggestions();
  }

  onChange(event, {newValue}) {
    this.props.updateValue(newValue);
  }

  onSuggestionSelected(event, {suggestion}) {
    RecentService.addSuggestion(suggestion);
    this.props.onSuggestionSelected(suggestion.id);
  }

  render() {
    const inputProps = {
      placeholder: 'Buscar un municipio',
      value: this.props.value,
      onChange: this.onChange.bind(this),
      type: 'search',
    };
    return (
      <main className="Search">
        <div className="Wrapper">
          <Autosuggest suggestions={ this.props.suggestions } onSuggestionsFetchRequested={ this.onSuggestionsFetchRequested.bind(this) } onSuggestionsClearRequested={ this.onSuggestionsClearRequested.bind(this) } getSuggestionValue={ getSuggestionValue }
            renderSuggestion={ renderSuggestion } inputProps={ inputProps } onSuggestionSelected={ this.onSuggestionSelected.bind(this) } />
        </div>
        <div className="Suggestions">
          <h3>Suxerencias</h3>
          { RecentService.getSuggestions().map(item => {
              return <a key={ item.id } onClick={ this.onLinkClick.bind(this) } href={ '/w/' + item.id }>
                       { item.nm } </a>
            }) }
        </div>
        <footer>
          <p> A project by Match&Go Labs</p>
          <p> Información meteorolóxica ofrecida pola AEMET.</p>
        </footer>
      </main>
      );
  }

  componentDidMount() {
    this.props.clearForecast();
  }

  onLinkClick(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.navigate(event.target.getAttribute('href'));
  }
}
