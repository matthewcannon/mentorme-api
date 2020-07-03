## Testing the MentorMe API endpoint

At a command line :-

1. Use cURL to send POST new Mentor records to the API endpoint.

        $ ENDPOINT=<paste-your-endpoint-here>
        $ curl -d '{"id":"1A2B", "firstName":"Adam", "lastName":"West"}' -H "Content-Type: application/json" -X POST $ENDPOINT
        $ curl -d '{"id":"2B3C", "firstName":"Bill", "lastName":"Bixby"}' -H "Content-Type: application/json" -X POST $ENDPOINT

1. Send a GET request to the endpoint to get a list of Mentors.

        $ curl $ENDPOINT
