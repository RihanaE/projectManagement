# projectManagement
## Overview
This project aims to create a robust Project Management API for clients using Arez Armada. The focus is on enabling designated administrators to efficiently manage projects by tracking progress and staffing. Clients fall into two types: those who prefer self-management and those who want their project fully managed by the API.

## Have this functional Features
### Authentication
- Admin Registration and Login with JWT authentication.

### User Profile
- Admins can update their profiles.

### Projects
- Project creation.
- Progress updates.
- Addition of developers to a project.
- Removal of developers from a project.

## Data Model
### Developer
- Name (String)
- Role (String)
- Contact Info (String)
- E-mail (String)
- Password (String)

### Project
- Name (String)
- Client Name (String)
- Start Date (Date)
- End Date (Date)
- Progress (Number)

### Admin
- Name (String)
- Role (String)
- Contact Info (String)

### Client
- Name (String)
- Role (String)
- Contact Info (String)

## Relationship
- Developers are associated with Projects.
- Admins are in charge of Projects.
- Clients are linked to Projects.
