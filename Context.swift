import Foundation

class ChatContext: ObservableObject {
    @Published var input: String = ""
    @Published var recentPrompt: String = ""
    @Published var prevPrompts: [String] = []
    @Published var showResult: Bool = false
    @Published var loading: Bool = false
    @Published var resultData: String = ""

    func newChat() {
        self.loading = false
        self.showResult = false
    }

    func onSend(prompt: String?) async {
        DispatchQueue.main.async {
            self.resultData = ""
            self.loading = true
            self.showResult = true
        }

        let actualPrompt = prompt ?? self.input
        if prompt == nil {
            self.prevPrompts.append(self.input)
        }

        self.recentPrompt = actualPrompt

        let response = await run(prompt: actualPrompt)
        let formattedResponse = formatResponse(response)

        DispatchQueue.main.async {
            self.resultData = formattedResponse
            self.loading = false
            self.input = ""
        }
    }

    private func run(prompt: String) async -> String {
        // Replace this stub with real API call to Gemini
        return "Simulated response for: \(prompt)"
    }

    private func formatResponse(_ text: String) -> String {
        var formatted = text
        formatted = formatted.replacingOccurrences(of: "**", with: "")
        formatted = formatted.replacingOccurrences(of: "*", with: "<br/>")
        formatted = formatted.replacingOccurrences(of: ":", with: "<br/>")
        formatted = formatted.replacingOccurrences(of: "(\\d+\\.)", with: "<br/>$1", options: .regularExpression)
        formatted = formatted.replacingOccurrences(of: "```(.*?)```", with: "<pre><code>$1</code></pre>", options: .regularExpression)
        return formatted
    }
}
