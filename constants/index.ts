export const FIELD_NAMES = {
    fullName: "Full name",
    email: "Email",
    universityId: "University ID Number",
    password: "Password",
    universityCard: "Upload University ID Card",
}

export const FIELD_TYPES = {
    fullName: "text",
    email: "email",
    universityId: "number",
    password: "password",
}


export const navigationLinks = [
    {
        href: "/library",
        label: "Library",
    },

    {
        img: "/icons/user.svg",
        selectedImg: "/icons/user-full.svg",
        href: "/my-profile",
        label: "My profile",
    },
];

export const adminSideBarLinks = [
    {
        img: "/icons/admin.svg",
        route: "/admin",
        text: "Home",
    },
    {
        img: "/icons/admin.svg",
        route: "/admin/users",
        text: "All Users",
    },
    {
        img: "/icons/admin.svg",
        route: "/admin/books",
        text: "All Books",
    }
]

export const sampleBooks = [
    {
        id: 1,
        title: "The Silent Forest",
        author: "Emily Hart",
        genre: "Mystery",
        rating: 4.5,
        total_copies: 10,
        available_copies: 4,
        description: "A gripping mystery set in a quiet town surrounded by a dense, eerie forest.",
        color: "#2E8B57",
        cover: "https://images-na.ssl-images-amazon.com/images/I/81o8SNPuY7L._AC_UL600_SR600,600_.jpg",
        video: "https://example.com/videos/silent-forest-trailer.mp4",
        summary: "When a young girl goes missing, a journalist uncovers chilling secrets hidden deep in the forest.",
    },
    {
        id: 2,
        title: "Future Bound",
        author: "Carlos Vega",
        genre: "Science Fiction",
        rating: 4.8,
        total_copies: 15,
        available_copies: 9,
        description: "A thrilling journey through time and space with high-stakes decisions.",
        color: "#4682B4",
        cover: "https://m.media-amazon.com/images/I/91++BOonLSL._UF1000,1000_QL80_.jpg",
        video: "https://example.com/videos/future-bound-trailer.mp4",
        summary: "After discovering a time portal, a scientist races against time to prevent a global catastrophe.",
    },
    {
        id: 3,
        title: "Beneath the Olive Tree",
        author: "Sophia Demetriou",
        genre: "Historical Fiction",
        rating: 4.3,
        total_copies: 8,
        available_copies: 2,
        description: "A touching story about family, war, and resilience in a small Mediterranean village.",
        color: "#D2B48C",
        cover: "https://m.media-amazon.com/images/I/71CpokmzJlL._UF1000,1000_QL80_.jpg",
        video: "https://example.com/videos/olive-tree-trailer.mp4",
        summary: "Spanning decades, this novel follows a woman's journey through love and loss during wartime Greece."
    }
];
