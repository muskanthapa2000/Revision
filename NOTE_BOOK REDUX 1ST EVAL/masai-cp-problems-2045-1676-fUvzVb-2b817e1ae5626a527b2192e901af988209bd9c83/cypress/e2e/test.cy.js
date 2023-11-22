import data from "../../submissionData.json"; // do not create this file
// const data = [
// 	{
// 		submission_link: "http://localhost:3000",
// 		id: "manish-local",
// 		json_server_link: "http://localhost:8080",
// 	},
// ];
const dbjson={
	"notes": [
	  {
		"title": "Optimize website development with React",
		"description": "React is a powerful JavaScript library for building fast and efficient user interfaces. Learn how to use it to optimize your website development process.",
		"id": 1
	  },
	  {
		"title": "Master JavaScript fundamentals",
		"description": "JavaScript is the backbone of modern web development. Learn the fundamentals of the language to build dynamic and interactive web applications.",
		"id": 2
	  },
	  {
		"title": "Build web pages with HTML",
		"description": "HTML is the foundation of every web page. Learn how to use it to create well-structured and accessible web pages.",
		"id": 3
	  },
	  {
		"title": "Take your JavaScript skills to the next level",
		"description": "Once you've mastered the fundamentals of JavaScript, it's time to dive deeper into the language. Learn advanced concepts and techniques to build even more powerful web applications.",
		"id": 4
	  },
	  {
		"title": "Develop dynamic user interfaces with React",
		"description": "React is a popular JavaScript library for building dynamic and interactive user interfaces. Learn how to use it to create dynamic web applications that respond to user input.",
		"id": 5
	  },
	  {
		"title": "Build scalable server-side applications with Node.js",
		"description": "Node.js is a powerful server-side JavaScript runtime that allows you to build scalable and performant web applications. Learn how to use it to build robust server-side applications.",
		"id": 6
	  }    
	]
  }
const updateddbjson={
	"notes": [
	  {
		"title": "Optimize website development with React and test it using cypress",
		"description": "description 1",
		"id": 1
	  },
	  {
		"title": "Master JavaScript fundamentals",
		"description": "JavaScript is the backbone of modern web development. Learn the fundamentals of the language to build dynamic and interactive web applications.",
		"id": 2
	  },
	  {
		"title": "Build web pages with HTML",
		"description": "HTML is the foundation of every web page. Learn how to use it to create well-structured and accessible web pages.",
		"id": 3
	  },
	  {
		"title": "Take your JavaScript skills to the next level",
		"description": "Once you've mastered the fundamentals of JavaScript, it's time to dive deeper into the language. Learn advanced concepts and techniques to build even more powerful web applications.",
		"id": 4
	  },
	  {
		"title": "Develop dynamic user interfaces with React",
		"description": "React is a popular JavaScript library for building dynamic and interactive user interfaces. Learn how to use it to create dynamic web applications that respond to user input.",
		"id": 5
	  },
	  {
		"title": "Build scalable server-side applications with Node.js and test it using jest",
		"description": "description 2",
		"id": 6
	  }    
	]
  }
const AfterDeletebbjson={
"notes": [
  {
	"title": "Master JavaScript fundamentals",
	"description": "JavaScript is the backbone of modern web development. Learn the fundamentals of the language to build dynamic and interactive web applications.",
	"id": 2
  },
  {
	"title": "Build web pages with HTML",
	"description": "HTML is the foundation of every web page. Learn how to use it to create well-structured and accessible web pages.",
	"id": 3
  },
  {
	"title": "Take your JavaScript skills to the next level",
	"description": "Once you've mastered the fundamentals of JavaScript, it's time to dive deeper into the language. Learn advanced concepts and techniques to build even more powerful web applications.",
	"id": 4
  },
  {
	"title": "Develop dynamic user interfaces with React",
	"description": "React is a popular JavaScript library for building dynamic and interactive user interfaces. Learn how to use it to create dynamic web applications that respond to user input.",
	"id": 5
  }]
}
const getNotes = (win) => win.store.getState();

data.forEach(({ submission_link: url, id, json_server_link: server_url }) => {
	describe("React_Redux_recipe_Book_Testing", function () {
		let acc_score = 1;
		beforeEach(() => {
			cy.visit(url);
			cy.window().its("store").should("exist");
			if (url.charAt(url.length - 1) != "/") {
				url = url + "/";
			}
			cy.writeFile("db.json",dbjson, (err) => {
				if (err) {
				  console.error(err);
				}
			  });
				Cypress.on("uncaught:exception", (err, runnable) => {
				// prevent the error from failing the test
				return false;
			});
		});

		it(`Check Initial Redux Store Structure`, () => {
			cy.window()
				.then(getNotes)
				.should("deep.equal", {
					notes: [],
  					view:"View Notes"
				})
				.then(() => {
					acc_score += 2;
				});
		});

		it(`Check if home page append with proper text`, () => {
			cy.url().should("eq", url);
			cy.get('[data-testid="viewnotes-container"]>h1').should(
				"have.text",
				"View Notes",
			);
			cy.get(`[data-testid="page-name"]`).should("be.visible").should("have.text","Notes")
			cy.get(`[data-cy="addnote-viewnotes-button"]`).should("be.visible").should("have.text","New Note+").click();
			
			cy.then(() => (acc_score += 1));
		});

		it(`Check if able to display all the notes`, () => {
			cy.intercept("GET", "**/notes").as(
				"getnotesdata",
			);
			cy.visit(url);
			cy.wait("@getnotesdata");
			cy.window()
				.then(getNotes).then((res)=>{
					cy.wait(100)
					expect(res.notes.length).to.eq(6)			
			})
			cy.get(`[data-testid="note-card"]`).then((cardsdata)=>{				
				expect(cardsdata.length).to.eq(dbjson.notes.length)
				dbjson.notes.forEach((ele,ind)=>{
					expect(cardsdata[ind]).to.contain(ele.title)
					expect(cardsdata[ind]).to.contain(ele.description)												
					cy.wrap(cardsdata[ind]).find('button').contains('Delete').should('exist');
					cy.wrap(cardsdata[ind]).find('button').contains('Edit').should('exist');
					cy.wrap(cardsdata[ind]).find('[data-testid="edit-note"]').should('not.exist');
				})
			})
			cy.then(()=>{
				acc_score += 2;
			})			
		});

		it("check if edit form is visible only we click on edit, and does not exist if we click on cancel edit",()=>{
			cy.intercept("GET", "**/notes").as(
				"getnotesdata",
			);
			cy.visit(url);
			cy.wait("@getnotesdata");	
			//editing first note		
			cy.get(`[data-testid="note-card"]`).first().find("button").eq(1).should("be.visible")
			cy.get(`[data-testid="note-card"]`).first().find(`[data-testid="edit-note"]`).should("not.exist")
			cy.get(`[data-testid="note-card"]`).first().find("button").eq(1).should("be.visible").click()
			cy.get(`[data-testid="edit-note"]`).should("exist")
			cy.get(`[data-testid="note-card"]`).first().find("button").eq(1).should("be.visible").click()
			cy.get(`[data-testid="note-card"]`).first().find(`[data-testid="edit-note"]`).should("not.exist")
			
			cy.then(()=>{
				acc_score += 1;
			})
		})

		it(`Check if able to edit the notes and updating on redux store and UI on real time`, () => {
			cy.intercept("GET", "**/notes").as(
				"getnotesdata",
			);
			cy.visit(url);
			cy.wait("@getnotesdata");	
			//editing first note		
			cy.get(`[data-testid="note-card"]`).first().find("button").eq(1).should("be.visible")
			cy.get(`[data-testid="note-card"]`).first().find(`[data-testid="edit-note"]`).should("not.exist")
			cy.get(`[data-testid="note-card"]`).first().find("button").eq(1).should("be.visible").click()
			cy.get(`[data-testid="edit-note"]`).should("exist")
			cy.get(`[data-testid="title-input"]`).should("have.value",dbjson.notes[0].title).type(" and test it using cypress");
			cy.get(`[data-testid="description-input"]`).should("have.value",dbjson.notes[0].description).clear().type(`description 1`)
			cy.intercept("PATCH","**/notes/**").as("editnotes")
			cy.get(`[data-testid="edit-note"] form`).submit();
			cy.wait("@editnotes")
			cy.get(`[data-testid="edit-note"]`).should("not.exist");
			cy.get(`[data-testid="note-card"]`).first().find("h3").should("have.text",dbjson.notes[0].title)
			cy.get(`[data-testid="note-card"]`).first().find("p").should("have.text",updateddbjson.notes[0].description)	
			//editing last Note
			cy.get(`[data-testid="note-card"]`).last().find("button").eq(1).should("be.visible")
			cy.get(`[data-testid="note-card"]`).last().find(`[data-testid="edit-note"]`).should("not.exist")
			cy.get(`[data-testid="note-card"]`).last().find("button").eq(1).click()
			cy.get(`[data-testid="edit-note"]`).should("exist")
			cy.get(`[data-testid="title-input"]`).should("have.value",dbjson.notes[5].title).type(" and test it using jest");
			cy.get(`[data-testid="description-input"]`).should("have.value",dbjson.notes[5].description).clear().type(`description 2`)
			cy.get(`[data-testid="edit-note"] form`).submit();
			cy.wait("@editnotes")
			cy.get(`[data-testid="edit-note"]`).should("not.exist");
			cy.get(`[data-testid="note-card"]`).last().find("h3").should("have.text",updateddbjson.notes[5].title)
			cy.get(`[data-testid="note-card"]`).last().find("p").should("have.text",updateddbjson.notes[5].description)
			//checking store
			cy.window().then(getNotes).should("deep.equal",{
				notes:[...updateddbjson.notes],
				view:"View Notes"
			}			)
			cy.then(()=>{
				acc_score += 4;
			})			
		});


		it("check deleting the note is working or not",()=>{
			cy.intercept("GET", "**/notes").as(
				"getnotesdata",
			);
			cy.visit(url);
			cy.wait("@getnotesdata");
				
			cy.intercept("DELETE","**/notes/**").as("deletenotes")		
			cy.get(`[data-testid="note-card"]`).first().find("button").eq(0).should("be.visible").click()
			cy.wait("@deletenotes");			
			cy.get(`[data-testid="note-card"]`).last().find("button").eq(0).should("be.visible").click()
			cy.wait("@deletenotes");
			cy.wait("@getnotesdata");			
			cy.wait(1000)
			cy.get(`[data-testid="note-card"]`).then((cardsdata)=>{				
				expect(cardsdata.length).to.eq(dbjson.notes.length-2)
				dbjson.notes.forEach((ele,ind)=>{
					if(ind!==0&&ind!==5)
					{
						expect(cardsdata[ind-1]).to.contain(ele.title)
						expect(cardsdata[ind-1]).to.contain(ele.description)												
						cy.wrap(cardsdata[ind-1]).find('button').contains('Delete').should('exist');
						cy.wrap(cardsdata[ind-1]).find('button').contains('Edit').should('exist');
						cy.wrap(cardsdata[ind-1]).find('[data-testid="edit-note"]').should('not.exist');
					}					
				})				
			})
			cy.window().then(getNotes).should("deep.equal",{
				notes:[...AfterDeletebbjson.notes],view:"View Notes"
			})
			cy.get(`[data-cy="total-notes"]`).should("contain",4)
			cy.then(()=>{
				acc_score += 2;
			})			
		})


		it("New Note+ button re-directing us to addnote page and also text content of the button is changing as per the problem statement, and again clicking on it reverting back to homepage",()=>{
			cy.visit(url);
			cy.wait(500);
			cy.get(`[data-testid="page-name"]`).should("have.text","Notes")	
			cy.get(`[data-cy="addnote-viewnotes-button"]`).should("be.visible").should("have.text","New Note+").click();
			cy.location("pathname").should("contain","/addnote")
			cy.window().then(getNotes).then((res)=>{
				expect(res.view).to.eq("Add Notes");
			})
			cy.get(`[data-testid="page-name"]`).should("have.text","Add Notes")
			cy.get(`[data-cy="addnote-viewnotes-button"]`).should("be.visible").should("have.text","View Notes").click();
			cy.location("pathname").should("contain","/")
			cy.window().then(getNotes).then((res)=>{
				expect(res.view).to.eq("View Notes");
			})
			cy.then(()=>{
				acc_score += 2;
			})
		})

		it("Able to access addnote page and add newnote",()=>{
			cy.visit(url);
			cy.wait(500);	
			cy.get(`[data-cy="addnote-viewnotes-button"]`).should("be.visible").click();
			cy.location("pathname").should("contain","/addnote");
			cy.get(`[data-testid="add-note"] form`).should("exist");
			cy.intercept("POST","**/notes").as("postNewNote");
			cy.intercept("GET","**/notes").as("getallnotes")
			cy.get(`[ data-testid="title-input"]`).clear().type("Note 7")
			cy.get(`[ data-testid="description-input"]`).clear().type("descritpion 7")
			cy.get(`[data-testid="add-note"] form`).submit();
			cy.wait("@postNewNote")
			cy.get(`[data-cy="addnote-viewnotes-button"]`).should("be.visible").click();
			cy.location("pathname").should("contain","/");
			cy.wait("@getallnotes")
			cy.get(`[data-cy="total-notes"]`).should("contain",7);
			
			cy.get(`[data-testid="note-card"]`).then((cardsdata)=>{	
			let	arr=[...dbjson.notes,{
					"title": "Note 7",
					"description": "descritpion 7",
					"id": 7
				  }]
				  expect(cardsdata.length).to.eq(arr.length)
				arr.forEach((ele,ind)=>{				
						expect(cardsdata[ind]).to.contain(ele.title)
						expect(cardsdata[ind]).to.contain(ele.description)												
						cy.wrap(cardsdata[ind]).find('button').contains('Delete').should('exist');
						cy.wrap(cardsdata[ind]).find('button').contains('Edit').should('exist');
						cy.wrap(cardsdata[ind]).find('[data-testid="edit-note"]').should('not.exist');
				})
			})
			//check redux store
			let	arr=[...dbjson.notes,{
				"title": "Note 7",
				"description": "descritpion 7",
				"id": 7
			  }]
			cy.window().then(getNotes).should("deep.equal",{
				notes:[...arr],view:"View Notes"
			})
			cy.then(()=>{
				acc_score += 2;
			})
		})





		after(() => {
			let result = {
				id,
				marks: Math.ceil(acc_score),
			};
			result = JSON.stringify(result);
			cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
				if (err) {
					console.error(err);
				}
			});
		});
	});
});
