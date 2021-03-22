const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
];

for (var i = 0; i < months.length; i++) {
    console.log(months[i]);
}

const itensC = [
    {
        name: "alimentação",
        price: 250,
    },
    {
        name: "lazer",
        price: 300,
    },
    {
        name: "compras",
        price: 700,
    },
    {
        name: "aluguel",
        price: 1000.29,
    },
    {
        name: "agua",
        price: 150,
    },
    {
        name: "luz",
        price: 350,
    },
];

const itensRender = ({ name, price }) => {
    return (
        <div class="itens">
            {" "}
            <p class={name}>{name.toUperCase()}</p> <p>R$ {price}</p>
        </div>
    );
};

console.log(itensC[0]);
