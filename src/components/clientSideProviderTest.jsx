"use client"

const ClientSideProviderTest = ({children}) => {

    const a = Math.random();
    console.log(a);

    return ( 
    <div  >
        {children}
    </div>
    )
  };
  
  export default ClientSideProviderTest;