const CategoryModel = require('../models/Category');

const cloudinary = require('cloudinary').v2;
cloudinary.config({ 
    cloud_name: 'dvhcd5oaz', 
    api_key: '377969336692132', 
    api_secret: 'ck52LMl4pM1JvZikeMw0cZNtx00' 
  });

class CategoryControllers{
    static categoryinsert = async(req,res)=>{
        try{
            const{cname, image}= req.body
            const file = req.files.image
            const image_upload = await cloudinary.uploader.upload(file.tempFilePath,{
                folder:'categoryimageApi'
            })
            const result = new CategoryModel({
                cname:cname,
                image:{
                    public_id:image_upload.public_id,
                    url:image_upload.secure_url
                }
                })
                await result.save()
                res.status(201).json({
                    status: "success",
                    message: "Category Inserted Successfully 😃🍻",
                });
        }catch(error){
            console.log(error);
        }
    }
    static categorydisplay = async(req,res)=>{
        try{
            const category = await CategoryModel.find()
            // console.log(category);
            res.status(201).json({
                status: 'success',
                message: 'successfull',
                category,
              })
        }catch(error){
            console.log(error);
        }
    }
    static categoryview = async(req,res)=>{
        try{
        //    console.log(req.params.id);
        const category = await CategoryModel.findById(req.params.id)
        res.status(201).json({
            status: 'success',
            message: 'successfull',
            category,
          })
        }catch(error){
            console.log(error);
        }
    } 
    static categoryupdate = async(req,res)=>{
        try{
            if(req.files){
                // console.log(req.params.id);
                const{cname, image}= req.body
                const category = await CategoryModel.findById(req.params.id)
                const imageid = category.image.public_id
                // console.log(imageid);
                await cloudinary.uploader.destroy(imageid)
                const file = req.files.image
                const image_upload = await cloudinary.uploader.upload(file.tempFilePath,{
                    folder:'categoryimageApi'
                })
                var data={
                    cname: cname,
                    image:{
                        public_id:image_upload.public_id,
                        url:image_upload.secure_url
                    }

                }

            }else{
                var data ={
                    cname: cname
                }
            }
            const update = await CategoryModel.findByIdAndUpdate(req.params.id, data)
            res.status(201).json({
                status: 'success',
                message: 'successfull',
                update,
              })
        }catch(error){
            console.log(error);
        }
    }
    static categorydelete = async(req,res)=>{
        try{
            await CategoryModel.findByIdAndDelete(req.params.id)
            res.status(201).json({
                status: 'success',
                message: 'Delete Successfully',
              })
        }catch(error){
            console.log(error);
        }
    }

}

module.exports= CategoryControllers