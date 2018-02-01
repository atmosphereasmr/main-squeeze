import React, { Component } from 'react'
import axios from 'axios'
import '../Shirts/shirts.css'
import { Link } from 'react-router-dom'

export default class FeaturedItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            feat_items: [],
            feat_name: '',
            feat_desc: '',
            feat_specs: '',
            feat_price: '',
            feat_link: '',
            feat_url: ''
        }
    }

    featDesc() {

    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/featureditem1')
            .then(response => {
                this.setState({
                    feat_items: response.data[0], feat_name: response.data[0].item_name,
                    feat_desc: response.data[0].item_description, feat_specs: response.data[0].specs,
                    feat_price: response.data[0].price, feat_link: response.data[0].link,
                    feat_url: response.data[0].item_url})
                }).then( () =>
                    this.changePic(this.state.feat_url)
                )}

    changePic(pic) {
        const chosenItem = document.getElementById("chosen-item")
        chosenItem.style = `background-image: url(${pic})`
    }

    buyClick() {
        window.location = this.state.feat_link
    }

    cartOn() {
        const cart = document.getElementById("shopping-cart")
        cart.className = "shopping-cart-on"
    }

    cartOff() {
        const cart = document.getElementById("shopping-cart")
        cart.className = "shopping-cart-off"
    }

    render() {
        return (
            <div>
                <div className="vinyl-home-container" id="home-container">
                    <div className="left-bar" id="left-bar">
                    </div>
                    <div className="left-container" id="left-container">
                        <Link to="/">
                            <div className="shirts-tab-off" id="shirts-tab">
                                <h1>Shirts</h1>
                            </div>
                        </Link>
                        <Link to="/vinyl">
                            <div className="vinyl-tab" id="vinyl-tab">
                                <h1>Vinyl</h1>
                            </div>
                        </Link>
                        <Link to="/socks">
                            <div className="vinyl-tab" id="vinyl-tab">
                                <h1>Socks</h1>
                            </div>
                        </Link>
                        <Link to="/patches">
                            <div className="vinyl-tab" id="vinyl-tab">
                                <h1>Patches & Pins</h1>
                            </div>
                        </Link>
                        <Link to="/posters">
                            <div className="vinyl-tab" id="vinyl-tab">
                                <h1>Posters</h1>
                            </div>
                        </Link>
                    </div>
                    <div className="vinyl-right-container" id="right-container">
                        <Link to="/">
                            <div className="go-back-button-on" id="go-back-button">
                                <p>⇦ Go back</p>
                            </div>
                        </Link>
                        <div className="chosen-item-on" id="chosen-item" onClick={() => this.buyClick()} onMouseEnter={() => this.cartOn()} onMouseLeave={() => this.cartOff()}>
                            <div className="shopping-cart-off" id="shopping-cart" onClick={() => this.buyClick()}>
                                <img src="http://www.freeiconspng.com/uploads/basket-cart-icon-27.png" />
                            </div>
                        </div>
                        <div className="chosen-description-on" id="chosen-description">
                            <div className="chosen-header">
                                {this.state.feat_name}
                            </div>
                            <p>{this.state.feat_desc}</p>
                            <p>{this.state.feat_specs}</p>
                        </div>
                        <div className="chosen-buy-box-on" id="chosen-buy-box">
                            <div className="chosen-price-container">
                                <p>{this.state.feat_price}</p>
                            </div>
                            <div className="chosen-buy-button" onClick={() => this.buyClick()}>
                                <p>Buy Now</p>
                            </div>
                        </div>

                    </div>
                    <div className="right-bar">
                    </div>
                </div>
                <div className="editor-container">
                <input placeholder="name" onChange={(e) => this.nameInput(e.target.value)}></input>
                    <input placeholder="name" onChange={(e) => this.nameInput(e.target.value)}></input>
                    <textarea rows="4" cols="50" onChange={(e) => this.descriptionInput(e.target.value)}></textarea>
                    <textarea rows="4" cols="50" onChange={(e) => this.specsInput(e.target.value)}></textarea>
                    <input placeholder="price" onChange={(e) => this.priceInput(e.target.value)}></input>
                    <input placeholder="picture url" onChange={(e) => this.urlInput(e.target.value)}></input>
                    <input placeholder="buy link url" onChange={(e) => this.linkInput(e.target.value)}></input>
                    <button onClick={() => this.submit()}>Create new item</button>
                </div>
            </div>
        )
    }
}