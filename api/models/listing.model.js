import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        
        },
        description:{
            type:String,
            required: true,

        },
        address: {
            type:String,
            required:true,
        },
        originalPrice:{
            type:Number,
            required:true,
        },
        discountPrice: {
            type:Number,
            required:true,
        },
        bedrooms:{
            type:Number,
            required:true,
        },
        furnished:{
            type:Boolean,
            required:true,
        },
        parkingArea:{
            type:Boolean,
            required:true,
        },
        type:{
            type:String,
            required:true,
        },
        offer:{
            type:Boolean,
            required:true,
        },
        imageUrls:{
            type:Array,
            required:true,
        },
        userRefs:{
            type:String,
            required:true,
        },
    }, {timestamps:true}
);
const Listing = mongoose.model('Listing', listingSchema);
export default Listing;