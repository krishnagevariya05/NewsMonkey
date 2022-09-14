import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Button from 'react-bootstrap/Button';

export class News extends Component {

  constructor(){
    super();
    
    this.state={
        articles :[],
        loading: false,
        page: 1
    }
  }

  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=1aa61480dd5f49d59ef5d10339640094&page=1pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})

  }
   handlePrevClick = async() =>{
    console.log("Previous");
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=1aa61480dd5f49d59ef5d10339640094&page=1=${this.state.page - 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })
    

  }
   handleNextClick = async() =>{
    console.log("Next");
    if( this.state.page +1  > Math.ceil(this.state.totalResults/20  )){

    }else{
      let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=1aa61480dd5f49d59ef5d10339640094&page=1=${this.state.page + 1}&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles
      })
  }
  }

  render() {
    console.log("render")
    return (
      <div className="container my-3">
        <h1>NewsMonkey - Top headlines</h1>
        
        <div className='row'>
        {this.state.articles.map((element)=>{
            return <div className='col-md-4' key={element.url}>
                <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
        })}

          

        </div>
        <div className='container d-flex justify-content-between'>
        <Button disabled ={this.state.page<=1} variant="dark" onClick={this.handlePrevClick}>&larr; Previous</Button> 
        <Button variant="dark" onClick={this.handleNextClick}>Next &rarr;</Button>
        </div>
      </div>
    )
  }
}

export default News