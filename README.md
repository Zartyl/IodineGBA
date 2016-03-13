# IodineGBA
A GameBoy Advance emulator written entirely in JavaScript and powered by HTML5.
	this.memoryWriter = [
-		/*
-			BIOS Area (00000000-00003FFF)
-			Unused (00004000-01FFFFFF)
-		*/
-		this.writeUnused,
-		/*
-			Unused (00004000-01FFFFFF)
-		*/
-		this.writeUnused,
-		/*
-			WRAM - On-board Work RAM (02000000-0203FFFF)
-			Unused (02040000-02FFFFFF)
-		*/
-		this.writeExternalWRAM,
-		/*
-			WRAM - In-Chip Work RAM (03000000-03007FFF)
-			Unused (03008000-03FFFFFF)
-		*/
-		this.writeInternalWRAM,
-		/*
-			I/O Registers (04000000-040003FE)
-			Unused (04000400-04FFFFFF)
-		*/
-		this.writeIODispatch,
-		/*
-			BG/OBJ Palette RAM (05000000-050003FF)
-			Unused (05000400-05FFFFFF)
-		*/
-		this.writePalette,
-		/*
-			VRAM - Video RAM (06000000-06017FFF)
-			Unused (06018000-06FFFFFF)
-		*/
-		this.writeVRAM,
-		/*
-			OAM - OBJ Attributes (07000000-070003FF)
-			Unused (07000400-07FFFFFF)
-		*/
-		this.writeOAM,
-		/*
-			Game Pak ROM (max 16MB) - Wait State 0 (08000000-08FFFFFF)
-		*/
-		this.writeROM0,
-		/*
-			Game Pak ROM/FlashROM (max 16MB) - Wait State 0 (09000000-09FFFFFF)
-		*/
-		this.writeROM0,
-		/*
-			Game Pak ROM (max 16MB) - Wait State 1 (0A000000-0AFFFFFF)
-		*/
-		this.writeROM1,
-		/*
-			Game Pak ROM/FlashROM (max 16MB) - Wait State 1 (0B000000-0BFFFFFF)
-		*/
-		this.writeROM1,
-		/*
-			Game Pak ROM (max 16MB) - Wait State 2 (0C000000-0CFFFFFF)
-		*/
-		this.writeROM2,
-		/*
-			Game Pak ROM/FlashROM (max 16MB) - Wait State 2 (0D000000-0DFFFFFF)
-		*/
-		this.writeROM2,
-		/*
-			Game Pak SRAM  (max 64 KBytes) - 8bit Bus width (0E000000-0E00FFFF)
-		*/
-		this.writeSRAM,
-		/*
-			Unused (0E010000-FFFFFFFF)
-		*/
-		this.writeUnused,
-		this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused,
-		this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused,
-		this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused,
-		this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused,
-		this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused,
-		this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused,
-		this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused,
-		this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused,
-		this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused,
-		this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused,
-		this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused,
-		this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused,
-		this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused,
-		this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused,
-		this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused,
-		this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused,
-		this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused,
-		this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused,
-		this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused,
-		this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused,
-		this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused,
-		this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused,
-		this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused,
-		this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused,
-		this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused,
-		this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused,
-		this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused,
-		this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused,
-		this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused,
-		this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused, this.writeUnused
-	];
-	this.memoryReader = [
-		/*
-			BIOS Area (00000000-00003FFF)
-			Unused (00004000-01FFFFFF)
-		*/
-		this.readBIOS,
-		/*
-			Unused (00004000-01FFFFFF)
-		*/
-		this.readUnused,
-		/*
-			WRAM - On-board Work RAM (02000000-0203FFFF)
-			Unused (02040000-02FFFFFF)
-		*/
-		this.readExternalWRAM,
-		/*
-			WRAM - In-Chip Work RAM (03000000-03007FFF)
-			Unused (03008000-03FFFFFF)
-		*/
-		this.readInternalWRAM,
-		/*
-			I/O Registers (04000000-040003FE)
-			Unused (04000400-04FFFFFF)
-		*/
-		this.readIODispatch,
-		/*
-			BG/OBJ Palette RAM (05000000-050003FF)
-			Unused (05000400-05FFFFFF)
-		*/
-		this.readPalette,
-		/*
-			VRAM - Video RAM (06000000-06017FFF)
-			Unused (06018000-06FFFFFF)
-		*/
-		this.readVRAM,
-		/*
-			OAM - OBJ Attributes (07000000-070003FF)
-			Unused (07000400-07FFFFFF)
-		*/
-		this.readOAM,
-		/*
-			Game Pak ROM (max 16MB) - Wait State 0 (08000000-08FFFFFF)
-		*/
-		this.readROM0,
-		/*
-			Game Pak ROM/FlashROM (max 16MB) - Wait State 0 (09000000-09FFFFFF)
-		*/
-		this.readROM0,
-		/*
-			Game Pak ROM (max 16MB) - Wait State 1 (0A000000-0AFFFFFF)
-		*/
-		this.readROM1,
-		/*
-			Game Pak ROM/FlashROM (max 16MB) - Wait State 1 (0B000000-0BFFFFFF)
-		*/
-		this.readROM1,
-		/*
-			Game Pak ROM (max 16MB) - Wait State 2 (0C000000-0CFFFFFF)
-		*/
-		this.readROM2,
-		/*
-			Game Pak ROM/FlashROM (max 16MB) - Wait State 2 (0D000000-0DFFFFFF)
-		*/
-		this.readROM2,
-		/*
-			Game Pak SRAM  (max 64 KBytes) - 8bit Bus width (0E000000-0E00FFFF)
-		*/
-		this.readSRAM,
-		/*
-			Unused (0E010000-FFFFFFFF)
-		*/
-		this.readUnused,
-		this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused,
-		this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused,
-		this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused,
-		this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused,
-		this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused,
-		this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused,
-		this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused,
-		this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused,
-		this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused,
-		this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused,
-		this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused,
-		this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused,
-		this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused,
-		this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused,
-		this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused,
-		this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused,
-		this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused,
-		this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused,
-		this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused,
-		this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused,
-		this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused,
-		this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused,
-		this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused,
-		this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused,
-		this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused,
-		this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused,
-		this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused,
-		this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused,
-		this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused,
-		this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused, this.readUnused
-	];
+
+	// Index of memory arrays represents bits 24-27
+	
+	for (i = 0; i < 64; i++) {
+		this.memoryWriter = this.writeUnused;
+		this.memoryReader = this.readUnused;
+	}
+
+	// BIOS Area (00000000-00003FFF)
+	// Unused (00004000-01FFFFFF)
+	this.memoryWriter[2] = this.writeExternalWRAM; // WRAM - On-board Work RAM (02000000-0203FFFF), Unused (02040000-02FFFFFF)
+	this.memoryWriter[3] = this.writeInternalWRAM; // WRAM - In-Chip Work RAM (03000000-03007FFF), Unused (03008000-03FFFFFF)
+	this.memoryWriter[4] = this.writeIODispatch; // I/O Registers (04000000-040003FE), Unused (04000400-04FFFFFF)
+	this.memoryWriter[5] = this.writePalette; // BG/OBJ Palette RAM (05000000-050003FF), Unused (05000400-05FFFFFF)
+	this.memoryWriter[6] = this.writeVRAM; // VRAM - Video RAM (06000000-06017FFF), Unused (06018000-06FFFFFF)
+	this.memoryWriter[7] = this.writeOAM; // OAM - OBJ Attributes (07000000-070003FF), Unused (07000400-07FFFFFF)
+	this.memoryWriter[8] = this.writeROM0; // Game Pak ROM (max 16MB) - Wait State 0 (08000000-08FFFFFF)
+	this.memoryWriter[9] = this.writeROM0; // Game Pak ROM/FlashROM (max 16MB) - Wait State 0 (09000000-09FFFFFF)
+	this.memoryWriter[10] = this.writeROM1; // Game Pak ROM (max 16MB) - Wait State 1 (0A000000-0AFFFFFF)
+	this.memoryWriter[11] = this.writeROM1; // Game Pak ROM/FlashROM (max 16MB) - Wait State 1 (0B000000-0BFFFFFF)
+	this.memoryWriter[12] = this.writeROM2; // Game Pak ROM (max 16MB) - Wait State 2 (0C000000-0CFFFFFF)
+	this.memoryWriter[13] = this.writeROM2; // Game Pak ROM/FlashROM (max 16MB) - Wait State 2 (0D000000-0DFFFFFF)
+	this.memoryWriter[14] = this.writeSRAM; // Game Pak SRAM  (max 64 KBytes) - 8bit Bus width (0E000000-0E00FFFF)
+	// Unused (0E010000-FFFFFFFF)
+
+	// BIOS Area (00000000-00003FFF)	
+	// Unused (00004000-01FFFFFF)
+	this.memoryReader[2] = this.readExternalWRAM; // WRAM - On-board Work RAM (02000000-0203FFFF), Unused (02040000-02FFFFFF)
+	this.memoryReader[3] = this.readInternalWRAM; // WRAM - In-Chip Work RAM (03000000-03007FFF), Unused (03008000-03FFFFFF)
+	this.memoryReader[4] = this.readIODispatch; // I/O Registers (04000000-040003FE), Unused (04000400-04FFFFFF)
+	this.memoryReader[5] = this.readPalette; // BG/OBJ Palette RAM (05000000-050003FF), Unused (05000400-05FFFFFF)
+	this.memoryReader[6] = this.readVRAM; // VRAM - Video RAM (06000000-06017FFF), Unused (06018000-06FFFFFF)
+	this.memoryReader[7] = this.readOAM; // OAM - OBJ Attributes (07000000-070003FF), Unused (07000400-07FFFFFF)
+	this.memoryReader[8] = this.readROM0; // Game Pak ROM (max 16MB) - Wait State 0 (08000000-08FFFFFF)
+	this.memoryReader[9] = this.readROM0; // Game Pak ROM/FlashROM (max 16MB) - Wait State 0 (09000000-09FFFFFF)
+	this.memoryReader[10] = this.readROM1; // Game Pak ROM (max 16MB) - Wait State 1 (0A000000-0AFFFFFF)
+	this.memoryReader[11] = this.readROM1; // Game Pak ROM/FlashROM (max 16MB) - Wait State 1 (0B000000-0BFFFFFF)
+	this.memoryReader[12] = this.readROM2; // Game Pak ROM (max 16MB) - Wait State 2 (0C000000-0CFFFFFF)
+	this.memoryReader[13] = this.readROM2; // Game Pak ROM/FlashROM (max 16MB) - Wait State 2 (0D000000-0DFFFFFF)
+	this.memoryReader[14] = this.readSRAM; // Game Pak SRAM  (max 64 KBytes) - 8bit Bus width (0E000000-0E00FFFF)
+	// Unused (0E010000-FFFFFFFF)
+
 	this.compileIOWriteDispatch();
 	this.compileIOReadDispatch();
 	this.compileMemoryAccessPostProcessDispatch();
