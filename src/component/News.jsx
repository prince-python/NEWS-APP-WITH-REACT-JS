import React from 'react';
import Newsitem from './Newsitem';

class news extends React.Component {
    constructor(props) {
        super(props);
        this.state = {articles:[],
        loading:false,
        page:1,
        totalarticles:[],
    };
    }
    async componentDidMount(){
        let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b81afe36320b4d258b654b448ef6394c&pageSize=20";
        let data= await fetch(url);
        var parseddata= await data.json()
        console.log(parseddata)
        this.setState({articles: parseddata.articles,   
        totalarti:parseddata.totalResults})
    }
 next=async ()=>{
    console.log("next")
    if(this.state.page + 1>Math.ceil(this.state.totalarti/20)){

    }
    else{
        let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b81afe36320b4d258b654b448ef6394c&page=${this.state.page +1}&pageSize=20`;
        let data= await fetch(url)
        let parseddata= await data.json()
        this.setState({
        page:this.state.page +1,
        articles: parseddata.articles
    })}
  }
 previous=async ()=>{
    console.log("pre")

    let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b81afe36320b4d258b654b448ef6394c&page=${this.state.page -1}&pageSize=20`;
    let data= await fetch(url)
    let parseddata= await data.json()
    this.setState({
    page:this.state.page -1,
    articles: parseddata.articles
})
  }

    render() {

        return (
            <>
            <div className='container my-3'>
            <br />
            <b><h1>NEWS WITH PRINCE</h1></b><br />
          <div className='row'>
          {this.state.articles.map((element)=>{
            return <div className='col-md-3'><Newsitem 
            key={element.url}
            title={element.title?element.title.slice(0,30):""}
            
            urlToImage={element.urlToImage?element.urlToImage:"https://meta.cdn.bubble.io/f1550965374835x373311315531899650/newsapi.svg"}
            description={element.description?element.description.slice(0,100):"there is no description"}
            url={element.url?element.url:""}
            />
           
            </div> 
            
            
          })}
          </div>
          <div className='container d-flex justify-content-between'>
          <button type="button" disabled={this.state.page<=1} className="btn btn-sm btn-dark" onClick={this.previous}>previous</button>
          <button type="button" disabled={this.state.page + 1>Math.ceil(this.state.totalarti/20)} className="btn btn-sm btn-dark" onClick={this.next}>Next</button>
          </div>
        </div>
        
              
        
            </>
        );
    }
}


export default news;
