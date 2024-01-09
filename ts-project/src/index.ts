const getUserName = document.querySelector("#user") as HTMLInputElement;
const formSubmit = document.querySelector("#form") as HTMLFormElement;
const main_container = document.querySelector(".main_container") as HTMLElement;


// so lets define the contract of an object
interface UserData {
    id: number;
    login: string;
    avatar_url: string;
    location: string;
    url: string;
};

// append to html
function showHtmlUI(user: UserData) {
    const { avatar_url, login, url } = user;
    main_container.insertAdjacentHTML(
        "beforeend",
        `<div class='card'>
            <img  src=${avatar_url} alt=${login} class='user-img' />
            <hr/>
            <div class='card-footer'>
            <img  src=${avatar_url} alt=${login} />
            <a href='${url}'>Github</a>
            </div>
        </div>`
    )
}

// reusable func
async function myCustomFetcher<T>(url: string, options?: RequestInit): Promise<T> {
    const Response = await fetch(url, options);

    if (!Response.ok) {
        throw new Error(
            `Network error: ${Response.status}`
        )
    }
    const data = await Response.json();
    console.log(data);
    return data;


}

function fetchUserData(url: string) {
    myCustomFetcher<UserData[]>(url, {}).then((userInfo) => {
        for (let user of userInfo) {
            showHtmlUI(user);
        }
    })
}


// default fuction call;
fetchUserData("https://api.github.com/users");

// lets perform search functanility


formSubmit.addEventListener("submit", async(e)=> {
    e.preventDefault();

    const searchItem = getUserName.value.toLowerCase();
    console.log(searchItem);

    try{
        const url = "https://api.github.com/users";

        const allUserData = await myCustomFetcher<UserData[]>(url,{});

        const matchingUsers = allUserData.filter((user) => {
            return user.login.toLowerCase().includes(searchItem);
        });

        main_container.innerHTML = ""; 

        if(matchingUsers.length === 0){
            main_container.insertAdjacentHTML("beforeend", 
            "<P class='empty-msg'>No matching Users found.</P>")
        }else{
            for (let user of matchingUsers) {
                showHtmlUI(user);
            }
        }
        
    }catch(err){
        console.log(err);
        
    }   
});