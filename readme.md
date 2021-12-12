## Bumpp - Assessment

Create a front-end application, where you can handle members object stored on a server-based application.

The server is at https://bumpp-assessment.herokuapp.com/

It provides a REST API for the Members object on the /members path.

sample :

> **GET https://bumpp-assessment.herokuapp.com/members**

```
{
    success: true,
    members: [{
        "id": "70f7e5f2-94a0-4688-80d2-14ba838dd074",
        "overview": {
            "job_title": "moon walker",
            "email": "moonwalker@jackson.com",
            "add_email": "just_beat_it@gmail.com",
            "phone_number": {
                "code": "+50",
                "number": "165669534"
            },
            "social_links": [{
                "type": "facebook",
                "title": "facebook.com/test",
                "url": "https://facebook.com/test"
                },
                {
                    "type": "linkedin",
                    "title": "linkedin.com/test",
                    "url": "https://linkedin.com/test"
                    }]
            },
            "user": {
                "first_name": "Michael",
                "last_name": "Jackson",
                "avatar": "https://images.unsplash.com/photo-1577640905050-83665af216b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWljaGFlbCUyMGphY2tzb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            }
        }]
    }
```

> **PUT https://bumpp-assessment.herokuapp.com/members/:id**

You can send in the body

```
{
	"overview: {
		"job_title": "singer"
	}
}
```

Response :

```
{
    success: true
}
```

Status codes returned from backend are :

- 200 OK
- 400 Bad Request
- 404 Not Found

### Exercise

We provide a design to play with this data @ [Figma designs](https://www.figma.com/file/mkP9uv5A0kO3eY2msu128B/Bumpp-Web-Technical-Assessment?node-id=0:1)

All the specs for implementing the desings are in the docs, we also assume you'll be able to make it look nice i.e. visually pleasing. You can use external CSS libraries or frameworks. if you have time work on making it responsive so it would be usable on different devices.
