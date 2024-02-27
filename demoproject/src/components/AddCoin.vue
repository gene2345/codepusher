<template>
    <div class="container">
        <form id="myform">
            <h2>Add Coins</h2>

            <div class="formli">
                <label for="coin1">Coin Name:</label>
                <input type="text" id="coin1" required placeholder="Enter Coin"><br><br>

                <label for="ticker1">Ticker:</label>
                <input type="text" id="ticker1" required placeholder="Valid Ticker"><br><br>
            
                <label for="buy1">Buy Price:</label>
                <input type="number" id="buy1" required placeholder="Buy Price"><br><br>

                <label for="quant1">Buy Quantity</label>
                <input type="number" id="quant1" required placeholder="Quantity"><br><br>
                
                <div class="save">
                    <button id="savebutton" type="button" @onclick="savetofs"> Save </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>

import firebaseApp from '../firebase.js';
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";

export default {
    methods: {
        
        async savetofs() {
            let coin = document.getElementById("coin1").value
            let ticker = document.getElementById("ticker1").value
            let buyPrice = document.getElementById("buy1").value
            let buyQuantity = document.getElementById("quant1").value
        
        try {
            const docRef = await setDoc(doc(db, "Portfolio", coin), {
            Coin: coin, Ticker:ticker, Buy_Price:buyPrice, Buy_Quantity:buyQuantity
        })
            document.getElementById('myform').reset()
            this.$emit("added")
        } catch(error) {
            console.log("Error when adding document: ", error)
        }
    }
}
}
</script>

<style scoped>

h2 {
    background-color: lightgreen;
}

.formli {
    display:inline-block;
    text-align: right;
}

form {
    text-align: center;
    align-items: center;
    margin: auto;
}

input:hover {
    box-shadow: 3px 3px purple;
    border-radius: 2px;
}

.save {
    text-align: center;
}


</style>