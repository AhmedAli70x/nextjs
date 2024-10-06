export const authConfig = {
    pages: {
        signIn:"/login"
    },
    providers: [],
    callbacks:{
        async jwt({token, user}){
            if(user){
                token.id = user.id;
                token.isAdmin = user.isAdmin;
            }
            return token;
        },
        async session({session, token}){
            session.user.id = token.id;
            session.user.isAdmin = token.isAdmin;
            return session;

        },

        authorized({auth, request}){
            return false
        }
    }
}