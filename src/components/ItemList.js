import { CDN_URL } from "../utils/constants";
const ItemList=({items})=>{
       return (<div>
            {items.map((item)=>(
                <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-around">
                    
                    <div className="w-9/12">
                    <div className="py-2">
                        <span>{item.card.info.name}</span>
                        <span> -Rs.{ item.card.info.price ?item.card.info.price/100: item.card.info.defaultPrice/100}</span>
                    </div>
                    <div className="w-3/12 p-4">
                    <div className="absolute ">
                        <button className="p-2 bg-black text-white rounded-lg shadow-lg absolute  mx-16">Add+</button>
                    </div>
                      
                    </div>
                    <img src={CDN_URL+item.card.info.imageId} className="w-14 "/>

                    </div>
                </div>
                ))}
       </div>
       );
}
export default ItemList;