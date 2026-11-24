let users = [
    {
        id: 1,
        name: "Ali",
        email: "ali@gmail.com"
    },
    {
        id: 2,
        name: "Ahmed",
        email: "ahmed@gmail.com"
    }
];

// GET all users
export const getUsers = (req, res) => {
    res.status(200).json({
        success: true,
        data: users
    });
};

// GET single user
export const getUserById = (req, res) => {
    const user = users.find(
        (user) => user.id === Number(req.params.id)
    );

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    res.status(200).json({
        success: true,
        data: user
    });
};

// CREATE user
export const createUser = (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({
            success: false,
            message: "Name and email are required"
        });
    }

    const newUser = {
        id: users.length
            ? Math.max(...users.map(user => user.id)) + 1
            : 1,
        name,
        email
    };

    users.push(newUser);

    res.status(201).json({
        success: true,
        message: "User created successfully",
        data: newUser
    });
};

// UPDATE user
export const updateUser = (req, res) => {
    const user = users.find(
        (user) => user.id === Number(req.params.id)
    );

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    const { name, email } = req.body;

    if (name !== undefined) user.name = name;
    if (email !== undefined) user.email = email;

    res.status(200).json({
        success: true,
        message: "User updated successfully",
        data: user
    });
};

// DELETE user
export const deleteUser = (req, res) => {
    const userExists = users.some(
        (user) => user.id === Number(req.params.id)
    );

    if (!userExists) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    users = users.filter(
        (user) => user.id !== Number(req.params.id)
    );

    res.status(200).json({
        success: true,
        message: "User deleted successfully"
    });
};