const createElements =(arr) =>{
    const htmlElements = arr.map(el =>`<button class="btn btn-soft ${el == 'bug' ? `btn-error`: el == 'help wanted' ? `btn-warning` : el == 'enhancement'? `btn-success`: el == 'documentation' ? `btn-info`:`` } rounded-full h-full">${el}</button>`)
    return htmlElements.join(' ');
};


const loadIssueCards=()=>{
    const url = `https://phi-lab-server.vercel.app/api/v1/lab/issues`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        displayIssueCards(data.data)
        console.log(data.data)
    });
};

const displayIssueCards = (issues) => {
    const issueContainer = document.getElementById('issue-container');
    issueContainer.innerHTML = '';

    for(let issue of issues){
        const issueDiv = document.createElement('div')
        issueDiv.innerHTML = `
            <div class="issue-card rounded-[4px] bg-base-100 shadow-md p-4 border-t-3 ${issue.status == "open" ? `border-[#00A96E]` :
                `border-[#A855F7]`} space-y-3 ">
                <div class="flex justify-between items-center">
                    <div class="">${issue.status == "open" ? `
                        <img class="" src="./assets/Open-Status.png" alt="">` : `<img class="" src="./assets/Closed-Status.png" alt="">`}
                    
                    </div>
                    <div class="btn btn-soft ${issue.priority == 'high' ? `btn-error`: issue.priority == 'medium' ? `btn-warning` : ``} rounded-full h-full">${issue.priority}</div>
                </div>
                <div><h2 class="font-semibold text-sm">${issue.title}</h2>
                <p class="text-[#64748B] text-xs line-clamp-2">${issue.description}</p>
                </div>
                <div>${createElements(issue.labels)}</div>
                <hr class="border-slate-200">
                <div class="text-[#64748B] text-xs space-y-2">
                    <p>#1 by ${issue.author}</p>
                    <p>${issue.updatedAt}</p>
                </div>
            </div>   
        `
        issueContainer.append(issueDiv)
    }  
}
loadIssueCards();


const issueCounter = () =>{
    const totalIssues = document.getElementById('total-issues');
    console.log(document.getElementById('issue-container').children)
    totalIssues.innerText = document.getElementById('issue-container').children.length;
}
issueCounter();