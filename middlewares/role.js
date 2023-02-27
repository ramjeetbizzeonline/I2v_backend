const { PermissionMessage } = require('../helpers/sendResponse');

const permit = (...permittedRoles) => (request, response, next) => {
    const employer = request.employerData;
    if (employer && permittedRoles.includes(employer.role)) {
        next();
    } else {
        PermissionMessage(response);
    }
};

module.exports = permit;
