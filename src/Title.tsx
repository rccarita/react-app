function Title() {
    const name = "Lana Rhoades";
    if (name) {
        return <h1>Hello {name}</h1>;
    } else {
        return <h1>Hello Nobody</h1>;
    }
}

export default Title;