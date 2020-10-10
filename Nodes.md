Very basics of cssselectors

Syntax is just like xpath but there is some difference

Syntax:
tagName[attribute='value']
where tag name is optional field 

To traverse from parent to child we use > 
example table[id='abc']>tr  

Wild Cards:
class = . 
id = #

To check css in chrome: 
go to console and type 
$$("your css") 
and then press enter

You need to add more plugins to use xpath 
XPATH:https://github.com/cypress-io/cypress-xpath
https://www.npmjs.com/package/cypress-xpath


Windows alerts popup:
https://docs.cypress.io/api/events/catalog-of-events.html#App-Events



cy.on('window:alert',(txt)=>{
         //Mocha assertions
         expect(txt).to.contains('Your full name cannot be blank.');
      }) 

can use events to handle windows alerts https://docs.cypress.io/api/events/catalog-of-events.html#App-Events Something like this 
From Ayush Jain to Everyone: (10:47 AM)
 cy.on('window:alert',(txt)=>{
         //Mocha assertions
         expect(txt).to.contains('Your full name cannot be blank.');
      }) 





https://stackoverflow.com/questions/28229424/how-to-set-execution-order-of-mocha-test-cases-in-multiple-files


Its run one by one based on how we writes in test suite? It might have prirority too I guess https://stackoverflow.com/questions/28229424/how-to-set-execution-order-of-mocha-test-cases-in-multiple-files 
From SharmilaPalagiri to Everyone: (10:54 AM)
 @Anupam https://pastebin.com/2ZjYJfqV 
From Anupam Patil to Me: (Privately) (10:55 AM)
 {
  "$schema":"https://on.cypress.io/cypress.schema.json",
  "defaultCommandTimeout": 6000

} 





https://www.tutorialspoint.com/cypress-architecture-test-automation


https://docs.cypress.io/guides/guides/command-line.html#cypress-run

npx cypress run --headless -b chrome 


Readme:https://docs.cypress.io/guides/tooling/reporters.html#Examples


Docker:
https://docs.cypress.io/examples/examples/docker.html#Images


cheatsheet:https://cheatography.com/aiqbal/cheat-sheets/cypress-io/


https://www.npmjs.com/package/cypress-xpath



https://stackoverflow.com/questions/28229424/how-to-set-execution-order-of-mocha-test-cases-in-multiple-files



https://github.com/cypress-io/cypress-docker-images



API:


cy.request({
    method: 'POST',
    url: url,

    headers: {
    },
    body: {requestBody}
  }) 
