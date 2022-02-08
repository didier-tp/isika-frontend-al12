describe("my calculator tests", function () {
    var detector;
	var compteur=0;
	
	beforeAll(function () {
     console.log("beforeAll()" );
    });

    beforeEach(function () {
     console.log("initialisation : new ... or ..." );
	 detector = 0;
	 compteur++;
    });
	

    it("2+3==5?", function () {
         expect(calculerOp('+',2,3)).toBe(5);
    });
    it("2*3==6?", function () {
        expect(calculerOp('*',2,3)).toBe(6);
    });
	it("8-5==3?", function () {
        expect(calculerOp('-',8,5)).toBe(3);
    });
	it("8/4==2?", function () {
         expect(calculerOp('/',8,4)).toBe(2);
    });
	
	it("racine carre de 9 vaut bien 3", function () {
         expect(racineCarree(9)).toBe(3);
    });
	
	afterAll( function(){
		expect(compteur).toBe(5);
	});
            
});
