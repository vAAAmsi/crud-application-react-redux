const data = [
    {
    id :1,
    name : 'vamsi',
    age :21,
    country : 'india'
},{
    id :2,
    name : 'sunny',
    age :20,
    country : 'pak'
},{
    id :3,
    name : 'bunny',
    age :16,
    country : 'zim'
}
]

export const reducer = (state = data,action) => {
    
    const {type,payload} = action;

    switch(type){
        case "Add" :
            return [...data,payload];
        case "Delete" :

            const finding = state.filter(i => i.id === payload)
           
            if(finding){
                return state.filter(i => i.id !== payload)
            }
        case "Edit" :
           
          const Efinding = state.find(i => i.id === payload.id);
            
            if(Efinding){
                state.splice(payload.id-1,1,payload)
                
            }
        default : return state;
    }
}