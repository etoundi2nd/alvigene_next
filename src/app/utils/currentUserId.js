function getCurrentUserId() {
    localStorage.getItem('currentUserId') || localStorage.setItem('currentUserId', crypto.randomUUID())
    return localStorage.getItem('currentUserId')
}

function argumentWithUser(argument) {
    const requestBody = {
        current_user_id: getCurrentUserId(),
        ...argument
    }

    return requestBody
}

export { getCurrentUserId, argumentWithUser }
