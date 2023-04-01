const addtocart = id =>{
   let ShoppingCard ;
   const StoredCard = localStorage.getItem('Shopping-Card')
   if(StoredCard){
      ShoppingCard=JSON.parse(StoredCard)
   }
   else{
      ShoppingCard={}
   }
   const qunentity = ShoppingCard[id]
   if(qunentity){
      const newquentity = qunentity+1;
      ShoppingCard[id]=newquentity;
   }
   else{
      ShoppingCard[id]=1;
   }
   localStorage.setItem('Shopping-Card',JSON.stringify(ShoppingCard))
}

const remove =(id)=>{
   const Store = localStorage.getItem("Shopping-Card")
   if(Store){
      const Shopping = JSON.parse(Store)
      if(id in Shopping){
         delete Shopping[id];
         localStorage.setItem('Shopping-Card',JSON.stringify(Shopping))
      }
   }
}

export {addtocart,remove};