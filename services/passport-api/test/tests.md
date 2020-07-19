## Viewer.application

- should throw APPLICATION_NOT_FOUND when trying to request application without having access to the application

## Viewer.session

- should throw SESSION_NOT_FOUND when trying to get a session that does not exist
- should throw SESSION_NOT_FOUND when trying to get a session that is not owned by the client

## Mutation.updateUser

- should throw FORBIDDEN when trying to update user info that cannot be updated
- should throw USER_NOT_FOUND when trying to update a user that does not exist

## Mutation.createApplication

## Mutation.updateApplication

- should throw FORBIDDEN when trying to update an application without having access to the application

## Mutation.removeApplication

- should throw FORBIDDEN when trying to remove the application without having access to the application