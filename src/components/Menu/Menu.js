import React, { useState, useContext } from "react";
import { Button, Container } from "react-bootstrap";
import "./Menu.css";
import MenuItem from "../MenuItem/MenuItem";
import CartContext from "../../context/cart/CartContext";

const Menu = ()=>{



    let MENU = [
        {
            id: "1",
            title: "Chicken Flat Noodles",
            description: "Assorted flat noodles cooked with chunks of chicken and a lot of veggis",
            price: 220,
            imageUrl:"https://www.archanaskitchen.com/images/archanaskitchen/1-Author/sibyl-archanaskitchen.com/Flat_Noodle_Tossed_with_Sauted_Vegetables__Teriyaki_Sauce_Recipe_.jpg"
        },
        {
            id: "2",
            title: "Mutton Biryani",
            description: "Mutton biryani is a delicious dish made of meat, spices, herbs & yogurt.",
            price: 270,
            imageUrl:"https://www.cubesnjuliennes.com/wp-content/uploads/2020/06/Mutton-Biryani-Recipe.jpg"
        },
        {
            id: "3",
            title: "Chicken Fried Rice",
            description: "Chicken Fried Rice is the most amazing Chinese style stir-fry rice with vegetables, chicken, and egg.",
            price: 150,
            imageUrl:"https://www.simplyrecipes.com/thmb/d3mYEivNIop0JOBuVlNmSOjSoz0=/1335x1335/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2017__12__2017-12-Chicken-Fried-Rice-2-15ac7014b47b40a1a7c7e20a638f4295.jpg"
        },
        {
            id:"4",
            title: "Kadhai Chicken",
            description: "Kadai chicken is a delicious, spicy & flavorful dish made with chicken, onions, tomatoes, ginger, garlic & fresh ground spices",
            price: 180,
            imageUrl:"https://myheartbeets.com/wp-content/uploads/2014/05/kadai-chicken-recipe-500x375.jpg"
        },
        {
            id:"5",
            title: "Tandoori Chicken",
            description : "Tandoori chicken is a chicken dish prepared by roasting chicken marinated in yogurt and spices in a tandoor, a cylindrical clay oven.",
            price: 250,
            imageUrl:"https://www.cubesnjuliennes.com/wp-content/uploads/2019/11/Tandoori-Chicken-1-500x500.jpg"
        },
        {
            id:"6",
            title: "Tandoori Roti",
            description: "It's a flatbread made with whole wheat and traditionally cooked in tandoor hence the name tandoori.",
            price: 30,
            imageUrl:"https://www.whiskaffair.com/wp-content/uploads/2019/06/Tandoori-Roti-1-3.jpg"
        }
    ];

    return (

        <React.Fragment>

            <Container className="mt-4">
                <h1 className="text-white text-center">Our Menu</h1>
                <hr id="menu-hr" />
            </Container>
            <Container className="bg-white rounded p-3 menu-container mb-5">
                {
                    MENU.map(element=>{
                        return (
                            <MenuItem key={element.id} data={element} />
                        )
                    })
                }
            </Container>
        </React.Fragment>
    )
};

export default Menu;