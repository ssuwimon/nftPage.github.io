const data = [
    {
        url: './assets/Screen.png',
        title: 'Moonbirds',
        content: 'Faucibus odio elementum nulla venenatis, libero. Ullamcorper duis fringilla pulvinar nibh diam sit.'
    },
    {
        url: './assets/Screen-1.png',
        title: 'Clone X - X Takashi Murakami',
        content: 'Magna in condimentum praesent pretium vitae mattis facilisis nunc. Lectus in ac ac.'
    },
    {
        url: './assets/Screen-2.png',
        title: 'Mutant Ape Yacht Club',
        content: 'Sit aenean porttitor sit lectus. Adipiscing egestas etiam eget cursus nulla risus euismod. Netus.'
    },
    {
        url: './assets/Screen-3.png',
        title: '"MOAR" by Joan Cornella',
        content: 'Faucibus odio elementum nulla venenatis, libero. Ullamcorper duis fringilla pulvinar nibh diam sit.'
    },
    {
        url: './assets/Screen-4.png',
        title: 'Doodles',
        content: 'Magna in condimentum praesent pretium vitae mattis facilisis nunc. Lectus in ac ac.'
    },
    {
        url: './assets/Screen-5.png',
        title: 'KIWAMI Genesis',
        content: 'Sit aenean porttitor sit lectus. Adipiscing egestas etiam eget cursus nulla risus euismod. Netus.'
    },
    {
        url: './assets/Screen-6.png',
        title: '"MOAR" by Joan Cornella',
        content: 'Faucibus odio elementum nulla venenatis, libero. Ullamcorper duis fringilla pulvinar nibh diam sit.'
    },
    {
        url: './assets/Screen-7.png',
        title: 'Doodles',
        content: 'Magna in condimentum praesent pretium vitae mattis facilisis nunc. Lectus in ac ac.'
    },
    {
        url: './assets/Screen-8.png',
        title: 'KIWAMI Genesis',
        content: 'Sit aenean porttitor sit lectus. Adipiscing egestas etiam eget cursus nulla risus euismod. Netus.'
    },
]

const ourData = [
    {
        title: 'Guy Hawkins',
        url: './assets/wrapper1.png',
        position: 'CEO'
    },
    {
        title: 'Jane Cooper',
        url: './assets/wrapper2.png',
        position: 'COO'
    },
    {
        title: 'Darrell Steward',
        url: './assets/wrapper3.png',
        position: 'CTO'
    },
    {
        title: 'Dianne Russell',
        url: './assets/wrapper4.png',
        position: 'CDO'
    },
]


const provideData = [
    {
        title: 'Host your NFTs',
        url: './assets/wrapper5.png',
        content: 'Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices',
    },
    {
        title: 'See your sales',
        url: './assets/wrapper6.png',
        content: 'Integer ante non nunc, eget est justo vel semper nunc. Lacus ',
    },
    {
        title: 'Secure wallet',
        url: './assets/wrapper7.png',
        content: 'Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est.',
    },
    {
        title: 'No scam',
        url: './assets/wrapper8.png',
        content: 'Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est.',

    },
]
console.log(ourData);
card(data)
ourTeam(ourData)
provide(provideData)

function card(data) {
    const tableData = document.getElementById('grid-content')
    let dataHtml = ''
    data.map((row) => {
        return (

            dataHtml += `
                <div id="grid-card">
                    <img class="img-card" src="${row.url}" alt="">
                    <p class='topic-card'>${row.title}</p>
                    <p class='content-card'>${row.content}</p>
                </div>`
        )
    })
    tableData.innerHTML = dataHtml
}

function ourTeam(data) {
    const tableData = document.getElementById('ourteam-card')
    let dataHtml = ''
    data.map((row) => {
        return (
            dataHtml += `
                <div id="grid-ourteam">
                    <img class="img-ourteam" src="${row.url}" alt="">
                    <p class='topic-ourteam'>${row.title}</p>
                    <p class='content-ourteam'>${row.position}</p>
                </div>`
        )
    })
    tableData.innerHTML = dataHtml
}
function provide(data) {
    const tableData = document.getElementById('provide-card')
    let dataHtml = ''
    data.map((row) => {
        return (
            dataHtml += `
                <div id="grid-provide">
                    <img class="img-ourteam" src="${row.url}" alt="">
                    <p class='topic-ourteam'>${row.title}</p>
                    <p class='content-provide'>${row.content}</p>
                </div>`
        )
    })
    tableData.innerHTML = dataHtml
}

