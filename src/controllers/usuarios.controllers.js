

const Usuario = require('../models/usuario.model');

module.exports = {
    index(req,res){
        res.json({message:'Hello World from controler usuario'});
    },
   async create(req,res){
       const {tipo_usuario, nome_usuario, email_usuario, senha_usuario} = req.body;
        
       let data = {};

       let user = Usuario.findOne({email_usuario});
        if(!user){
            data = {tipo_usuario, nome_usuario, email_usuario, senha_usuario};
            user = await Usuario.create(data);
            return res.status(200).json(user);
        }else{
            return res.status(500).json(user);
        }
    
    }

};