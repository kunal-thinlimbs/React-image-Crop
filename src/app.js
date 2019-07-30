import React, {Component} from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css'; // see installation section above for versions of NPM older than 3.0.0
// If you choose not to use import, you need to assign Cropper to default
// var Cropper = require('react-cropper').default
var base64Img = require('base64-img');
class App extends Component {


  state={
    path:"",
    currentindex:0
  }
  _crop(){

    // image in dataUrl
    console.log(this.refs.cropper.getCroppedCanvas().toDataURL());
  this.setState({path:this.refs.cropper.getCroppedCanvas().toDataURL()})
  
  }


  render() {
    const  a=[
      {id:"data:image/png;base64,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"},
      {id:"https://s.gravatar.com/avatar/695e3489eb762ae2bf94f3e1e2b8ce2c?size=100&default=retro"}
      ]
      var i=0;
    function toDataURL(src, callback, outputFormat) {
      var img = new Image();
      img.crossOrigin = 'Anonymous';
      img.onload = function() {
        var canvas = document.createElement('CANVAS');
        var ctx = canvas.getContext('2d');
        var dataURL;
        canvas.height = this.naturalHeight;
        canvas.width = this.naturalWidth;
        ctx.drawImage(this, 0, 0);
        dataURL = canvas.toDataURL(outputFormat);
        callback(dataURL);
      };
      img.src = src;
      // if (img.complete || img.complete === undefined) {
      //   img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      //   img.src = src;
      // }
    }
    
    
    
    return (
      <>
      <div style={{textAlign:"center"}}>
      <Cropper
        ref='cropper'
        src={ a[this.state.currentindex].id}
    
        style={{height: 400, width: '100%'}}
        // Cropper.js options
        aspectRatio={16 / 9}
        guides={false}
        crop={this._crop.bind(this)} />
        
        <h1>Preview</h1>
        <img src={this.state.path} />
        
<br/>
<br/>
{this.state.currentindex <a.length-1 && 
<button  style={{textAlign:"center",backgroundColor:"lightgreen",padding:"10px",borderColor:"white",
color:"white"
}} onClick={()=>{
this.setState({currentindex:this.state.currentindex+1})




}}> NEXT</button>}
{this.state.currentindex >=a.length-1 && <button  style={{textAlign:"center",backgroundColor:"lightgreen",padding:"10px",borderColor:"white",
color:"white"
}} onClick={()=>{
this.setState({currentindex:this.state.currentindex-1})




}}> PREV</button>}
</div>

        </>
    );
  }
}
 export  default App

