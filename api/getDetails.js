const axios = require("axios");
const getDetails = (pin, chat_id, api) => {
    api.sendChatAction({ chat_id: chat_id, action: "typing" });
    if (messageWithUserName.startsWith("!")) {
        api.sendChatAction({ chat_id: chat_id, action: "typing" });
        const newUsername = messageWithUserName.slice(1);
        const GH_API = `https://api.github.com/users/${newUsername}`;
        axios
            .get(GH_API)
            .then(function(response) {
                // console.log(response);
                // !Array Destructuring
                const [ghUsername, url, name, publicRepos, followers, following] = [
                    response.data.login,
                    response.data.html_url,
                    response.data.name,
                    response.data.public_repos,
                    response.data.followers,
                    response.data.following,
                ];
                api.sendMessage({
                    chat_id: chat_id,
                    text: url +
                        "\n* Name: *" +
                        name +
                        "\n* Username: *" +
                        ghUsername +
                        "\n* Public Repos: *" +
                        publicRepos +
                        "\n* Followers: *" +
                        followers +
                        "\n* Following: *" +
                        following,
                    parse_mode: "Markdown",
                });
            })
            .catch(function(err) {
                api.sendMessage({
                    chat_id: chat_id,
                    text: "അച്ചോടാ!!",
                    parse_mode: "Markdown",
                });
                console.log(err);
                console.log("error anallo");
            });
    }
};
module.exports = getDetails;