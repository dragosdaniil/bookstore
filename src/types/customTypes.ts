export interface bookTypes {
    title:string,
    author:string,
    price?:number,
    genre?:string,
    quantity?:number,
    image_url?:string
}

export interface customProps {
    books:Array<bookTypes>
}

export interface Props{
    children:any;
}