<?php
namespace Utilities\Email\Emails\Covid;

class CovidHODS {

		public function __construct($to, $name, array $alertNames, array $notAnsweredNames, array $notInWorkNames)
		{
			//to, subject, tag, track
      // $to = 'sdf@marlboroughcollege.org';
			$prefix = 'All Clear:';
			$msg = 'All clear. No members of staff have reported Covid-19 symptoms today.';

			$alertHTML = '';
			$notAnsweredHTML = '';
			$notInWorkHTML = '';

			if (count($notAnsweredNames) > 0) {
				$prefix ='Attention: ';
				$msg = 'All clear so far but the following members of staff have not checked in today.';
				$notAnsweredHTML = "<p style='margin-top:0; margin-bottom: 5px; color:#2F3133;font-size:16px;line-height:1.5em;text-align:left;font-weight:bold;' >The following have not checked in:</p>";
				foreach($notAnsweredNames as $n) $notAnsweredHTML .= "<p style='margin-top:0; margin-left: 5px; color:#2F3133;font-size:16px;line-height:1.5em;text-align:left;font-weight:normal;' >$n</p>";
			}

			if (count($alertNames) > 0) {
				$prefix = "!!! Alert !!! ";
				$msg = 'The following member(s) of staff have reported possible Covid-19 symptoms.';
				$alertHTML = '';
				foreach($alertNames as $n) $alertHTML .= "<p style='margin-top:0;color:#8b0000; margin-left: 5px; font-size:16px;line-height:1.5em;text-align:left;font-weight:bold;' >$n</p>";
			}

			if (count($notInWorkNames) > 0) {
				$notInWorkHTML = "<p style='margin-top:0; margin-bottom: 5px; color:#2F3133;font-size:16px;line-height:1.5em;text-align:left;font-weight:bold;' >The following are not in school today:</p>";
				foreach($notInWorkNames as $n) $notInWorkHTML .= "<p style='margin-top:0;color:#2F3133;margin-left: 5px;font-size:16px;line-height:1.5em;text-align:left;font-weight:normal;' >$n</p>";
			}

      $email = new \Utilities\Email\Email($to, "$prefix HOD Covid-19 Check-In Summary");


      $content = $email->template('covid.hods', array("name"=>$name, 'message' => $msg, "notAnswered" => $notAnsweredHTML, "alert" => $alertHTML, 'notInWork' => $notInWorkHTML));

      $email->send($content);
			return [
				'alert' => $alertNames,
				'notAnswered' => $notAnsweredNames,
				'notInWorkNames' => $notInWorkNames
			];
		}

}

?>
