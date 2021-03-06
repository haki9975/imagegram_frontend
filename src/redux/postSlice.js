import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit'




export const fetchPosts = createAsyncThunk(
    'posts/getPosts',
    async () => {
        const response = await fetch('http://localhost:3000/posts')
        const data = await response.json()
        return data
    }
)

export const likePayload = createAction("PATCH_LIKES")

export const sendLike = createAsyncThunk(
    'posts/addLikes',
    async (like) => {
        const response = await fetch(`http://localhost:3000/posts/${like.payload.id}`,
        {
            method: "PATCH",
            headers: {
                "Content-type":"application/json"
            },
            body: JSON.stringify(like)
        })
        const data = await response.json()
        return data
    }
)



export const sendPosts = createAsyncThunk(
    'posts/newPost',
    async (formInput) => {
        const response = await fetch('http://localhost:3000/posts',
        {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(formInput)
        })
        const data = await response.json()
    
        return data
    }

)


const postsSlice = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {
       
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            
         return state = action.payload
         
        })
        builder.addCase(sendLike.fulfilled, (state, action) => {
           let likedPost = state.map(p => p.id == action.payload.id ? p = action.payload : p )
           return likedPost
        }
    )}
})


export default postsSlice.reducer