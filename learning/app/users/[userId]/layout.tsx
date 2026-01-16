

export default function UserLayout({children}: {children: React.ReactNode}) {
    return (
    <div>
        {" "}
        <h1 style={ {color : "red"}}> THIS IS A USER ROUTE </h1>
        {children}
    </div>
    )
}