import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product, ProductReview } from '../../utils/types/Skincare';

type SkincareState = { products: Product[] };

const initialState: SkincareState = {
    products: [],
};

const skincareSlice = createSlice({
    name: "skincare",
    initialState: initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Omit<Product, "id">>) => {
            const product = {
                ...action.payload,
                id: Date.now().toString()
            }; state.products.push(product)

        },

        deleteProduct: (state, action: PayloadAction<string>) => {
            state.products = state.products.filter(
                (pd) => pd.id !== action.payload
            )
        },

        addReview: (state, action: PayloadAction<{ productId: string; review: ProductReview }>) => {
            state.products = state.products.map((product) => {
                if (product.id === action.payload.productId) {
                    product.review = action.payload.review
                }

                return product;
            })
        }

    }

}

)

export const {
    addProduct,
    deleteProduct,
    addReview
} = skincareSlice.actions;

export default skincareSlice.reducer;