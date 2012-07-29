  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>ExamplesByMesh/JavaScript/QuadTree/src/QuadTree.js at master · mikechambers/ExamplesByMesh</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="apple-touch-icon-114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="apple-touch-icon-114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="apple-touch-icon-144.png" />
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="apple-touch-icon-144.png" />

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.png" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="B0rvVscfQ+EOatVinkXfIjuFc9y82Z/leAA3sY98zuA=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-6ccf6cea137dd44cdaadff5a0bd7fbc1ba3d1703.css" media="screen" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-2dbf68ef6fabd57243f65ab620c99ed28a27f673.css" media="screen" rel="stylesheet" type="text/css" />
    


    <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-cda884a5a58f7a231c16c075e16bc5c1509f192b.js" type="text/javascript"></script>
    
    <script defer="defer" src="https://a248.e.akamai.net/assets.github.com/assets/github-51bb4f9055afda80562b32fb6dc9d6fd15bb7ecb.js" type="text/javascript"></script>
    
    

      <link rel='permalink' href='/mikechambers/ExamplesByMesh/blob/5873016531936bb32ff7e3b037bc973ec45f7329/JavaScript/QuadTree/src/QuadTree.js'>
    <meta property="og:title" content="ExamplesByMesh"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/mikechambers/ExamplesByMesh"/>
    <meta property="og:image" content="https://a248.e.akamai.net/assets.github.com/images/gravatars/gravatar-140.png?1329275856"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="ExamplesByMesh - Various examples and code created and shared by Mike Chambers"/>

    <meta name="description" content="ExamplesByMesh - Various examples and code created and shared by Mike Chambers" />

  <link href="https://github.com/mikechambers/ExamplesByMesh/commits/master.atom" rel="alternate" title="Recent Commits to ExamplesByMesh:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob macintosh vis-public env-production ">
    <div id="wrapper">

    
    
    

      <div id="header" class="true clearfix">
        <div class="container clearfix">
          <a class="site-logo" href="https://github.com/">
            <!--[if IE]>
            <img alt="GitHub" class="github-logo" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7.png?1323882717" />
            <img alt="GitHub" class="github-logo-hover" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7-hover.png?1324325358" />
            <![endif]-->
            <img alt="GitHub" class="github-logo-4x" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x.png?1337118066" />
            <img alt="GitHub" class="github-logo-4x-hover" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x-hover.png?1337118066" />
          </a>



              
    <div class="topsearch  ">
        <form accept-charset="UTF-8" action="/search" id="top_search_form" method="get">
  <a href="/search" class="advanced-search tooltipped downwards" title="Advanced Search"><span class="mini-icon mini-icon-advanced-search"></span></a>
  <div class="search placeholder-field js-placeholder-field">
    <input type="text" class="search my_repos_autocompleter" id="global-search-field" name="q" results="5" spellcheck="false" autocomplete="off" data-autocomplete="my-repos-autocomplete" placeholder="Search&hellip;" data-hotkey="s" />
    <div id="my-repos-autocomplete" class="autocomplete-results">
      <ul class="js-navigation-container"></ul>
    </div>
    <input type="submit" value="Search" class="button">
    <span class="mini-icon mini-icon-search-input"></span>
  </div>
  <input type="hidden" name="type" value="Everything" />
  <input type="hidden" name="repo" value="" />
  <input type="hidden" name="langOverride" value="" />
  <input type="hidden" name="start_value" value="1" />
</form>

      <ul class="top-nav">
          <li class="explore"><a href="https://github.com/explore">Explore</a></li>
          <li><a href="https://gist.github.com">Gist</a></li>
          <li><a href="/blog">Blog</a></li>
        <li><a href="http://help.github.com">Help</a></li>
      </ul>
    </div>


            


  <div id="userbox">
    <div id="user">
      <a href="https://github.com/ayau"><img height="20" src="https://secure.gravatar.com/avatar/41c2f67824dde23e33edca4579b45f31?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
      <a href="https://github.com/ayau" class="name">ayau</a>
    </div>
    <ul id="user-links">
      <li>
        <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a New Repo"><span class="mini-icon mini-icon-create"></span></a>
      </li>
      <li>
        <a href="/inbox/notifications" id="notifications" class="tooltipped downwards" title="Notifications">
          <span class="mini-icon mini-icon-notifications"></span>
          <span class="unread_count">35</span>
        </a>
      </li>
      <li>
        <a href="/settings/profile" id="account_settings"
          class="tooltipped downwards"
          title="Account Settings ">
          <span class="mini-icon mini-icon-account-settings"></span>
        </a>
      </li>
      <li>
          <a href="/logout" data-method="post" id="logout" class="tooltipped downwards" title="Sign Out">
            <span class="mini-icon mini-icon-logout"></span>
          </a>
      </li>
    </ul>
  </div>



          
        </div>
      </div>

      

            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="container hentry">
        <div class="pagehead repohead instapaper_ignore readability-menu">
        <div class="title-actions-bar">
          



              <ul class="pagehead-actions">



          <li class="js-toggler-container js-social-container watch-button-container ">
            <span class="watch-button"><a href="/mikechambers/ExamplesByMesh/toggle_watch" class="minibutton btn-watch js-toggler-target lighter" data-remote="true" data-method="post" rel="nofollow">Watch</a><a class="social-count js-social-count" href="/mikechambers/ExamplesByMesh/watchers">118</a></span>
            <span class="unwatch-button"><a href="/mikechambers/ExamplesByMesh/toggle_watch" class="minibutton btn-unwatch js-toggler-target lighter" data-remote="true" data-method="post" rel="nofollow">Unwatch</a><a class="social-count js-social-count" href="/mikechambers/ExamplesByMesh/watchers">118</a></span>
          </li>

              <li>
                <a href="/mikechambers/ExamplesByMesh/fork_select" class="minibutton btn-fork js-toggler-target lighter" rel="facebox nofollow">Fork</a><a href="/mikechambers/ExamplesByMesh/network" class="social-count">19</a>
              </li>

    </ul>

          <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
            <span class="repo-label"><span>public</span></span>
            <span class="mega-icon mega-icon-public-repo"></span>
            <span class="author vcard">
<a href="/mikechambers" class="url fn" itemprop="url" rel="author">              <span itemprop="title">mikechambers</span>
              </a></span> /
            <strong><a href="/mikechambers/ExamplesByMesh" class="js-current-repository">ExamplesByMesh</a></strong>
          </h1>
        </div>

          

  <ul class="tabs">
    <li><a href="/mikechambers/ExamplesByMesh" class="selected" highlight="repo_sourcerepo_downloadsrepo_commitsrepo_tagsrepo_branches">Code</a></li>
    <li><a href="/mikechambers/ExamplesByMesh/network" highlight="repo_network">Network</a>
    <li><a href="/mikechambers/ExamplesByMesh/pulls" highlight="repo_pulls">Pull Requests <span class='counter'>2</span></a></li>

      <li><a href="/mikechambers/ExamplesByMesh/issues" highlight="repo_issues">Issues <span class='counter'>4</span></a></li>

      <li><a href="/mikechambers/ExamplesByMesh/wiki" highlight="repo_wiki">Wiki</a></li>

    <li><a href="/mikechambers/ExamplesByMesh/graphs" highlight="repo_graphsrepo_contributors">Graphs</a></li>


  </ul>
  
<div class="frame frame-center tree-finder" style="display:none"
      data-tree-list-url="/mikechambers/ExamplesByMesh/tree-list/5873016531936bb32ff7e3b037bc973ec45f7329"
      data-blob-url-prefix="/mikechambers/ExamplesByMesh/blob/5873016531936bb32ff7e3b037bc973ec45f7329"
    >

  <div class="breadcrumb">
    <span class="bold"><a href="/mikechambers/ExamplesByMesh">ExamplesByMesh</a></span> /
    <input class="tree-finder-input js-navigation-enable" type="text" name="query" autocomplete="off" spellcheck="false">
  </div>

    <div class="octotip">
      <p>
        <a href="/mikechambers/ExamplesByMesh/dismiss-tree-finder-help" class="dismiss js-dismiss-tree-list-help" title="Hide this notice forever" rel="nofollow">Dismiss</a>
        <span class="bold">Octotip:</span> You've activated the <em>file finder</em>
        by pressing <span class="kbd">t</span> Start typing to filter the
        file list. Use <span class="kbd badmono">↑</span> and
        <span class="kbd badmono">↓</span> to navigate,
        <span class="kbd">enter</span> to view files.
      </p>
    </div>

  <table class="tree-browser" cellpadding="0" cellspacing="0">
    <tr class="js-header"><th>&nbsp;</th><th>name</th></tr>
    <tr class="js-no-results no-results" style="display: none">
      <th colspan="2">No matching files</th>
    </tr>
    <tbody class="js-results-list js-navigation-container">
    </tbody>
  </table>
</div>

<div id="jump-to-line" style="display:none">
  <h2>Jump to Line</h2>
  <form accept-charset="UTF-8">
    <input class="textfield" type="text">
    <div class="full-button">
      <button type="submit" class="classy">
        Go
      </button>
    </div>
  </form>
</div>


<div class="subnav-bar">

  <ul class="actions subnav">
    <li><a href="/mikechambers/ExamplesByMesh/tags" class="blank" highlight="repo_tags">Tags <span class="counter">0</span></a></li>
    <li><a href="/mikechambers/ExamplesByMesh/downloads" class="blank downloads-blank" highlight="repo_downloads">Downloads <span class="counter">0</span></a></li>
    
  </ul>

  <ul class="scope">
    <li class="switcher">

      <div class="context-menu-container js-menu-container js-context-menu">
        <a href="#"
           class="minibutton bigger switcher js-menu-target js-commitish-button btn-branch repo-tree"
           data-hotkey="w"
           data-master-branch="master"
           data-ref="master">
           <span><i>branch:</i> master</span>
        </a>

        <div class="context-pane commitish-context js-menu-content">
          <a href="javascript:;" class="close js-menu-close"><span class="mini-icon mini-icon-remove-close"></span></a>
          <div class="context-title">Switch branches/tags</div>
          <div class="context-body pane-selector commitish-selector js-navigation-container">
            <div class="filterbar">
              <input type="text" id="context-commitish-filter-field" class="js-navigation-enable" placeholder="Filter branches/tags" data-filterable />

              <ul class="tabs">
                <li><a href="#" data-filter="branches" class="selected">Branches</a></li>
                <li><a href="#" data-filter="tags">Tags</a></li>
              </ul>
            </div>

            <div class="js-filter-tab js-filter-branches" data-filterable-for="context-commitish-filter-field" data-filterable-type=substring>
              <div class="no-results js-not-filterable">Nothing to show</div>
                <div class="commitish-item branch-commitish selector-item js-navigation-item js-navigation-target selected">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/mikechambers/ExamplesByMesh/blob/master/JavaScript/QuadTree/src/QuadTree.js" class="js-navigation-open" data-name="master" rel="nofollow">master</a>
                  </h4>
                </div>
            </div>

            <div class="js-filter-tab js-filter-tags" style="display:none" data-filterable-for="context-commitish-filter-field" data-filterable-type=substring>
              <div class="no-results js-not-filterable">Nothing to show</div>
            </div>
          </div>
        </div><!-- /.commitish-context-context -->
      </div>

    </li>
  </ul>

  <ul class="subnav with-scope">

    <li><a href="/mikechambers/ExamplesByMesh" class="selected" highlight="repo_source">Files</a></li>
    <li><a href="/mikechambers/ExamplesByMesh/commits/master" highlight="repo_commits">Commits</a></li>
    <li><a href="/mikechambers/ExamplesByMesh/branches" class="" highlight="repo_branches" rel="nofollow">Branches <span class="counter">1</span></a></li>
  </ul>

</div>

  
  
  


          

        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" data-pjax-container>
          




<!-- blob contrib key: blob_contributors:v21:a8817962a053805b599846aa76a7d897 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:a8817962a053805b599846aa76a7d897 -->

<!-- block_view_fragment_key: views10/v8/blob:v21:5cee53c8c91944f3e46f6f529c2bdc97 -->
  <div id="slider">

    <div class="breadcrumb" data-path="JavaScript/QuadTree/src/QuadTree.js/">
      <b itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mikechambers/ExamplesByMesh/tree/5873016531936bb32ff7e3b037bc973ec45f7329" class="js-rewrite-sha" itemprop="url"><span itemprop="title">ExamplesByMesh</span></a></b> / <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mikechambers/ExamplesByMesh/tree/5873016531936bb32ff7e3b037bc973ec45f7329/JavaScript" class="js-rewrite-sha" itemscope="url"><span itemprop="title">JavaScript</span></a></span> / <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mikechambers/ExamplesByMesh/tree/5873016531936bb32ff7e3b037bc973ec45f7329/JavaScript/QuadTree" class="js-rewrite-sha" itemscope="url"><span itemprop="title">QuadTree</span></a></span> / <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mikechambers/ExamplesByMesh/tree/5873016531936bb32ff7e3b037bc973ec45f7329/JavaScript/QuadTree/src" class="js-rewrite-sha" itemscope="url"><span itemprop="title">src</span></a></span> / <strong class="final-path">QuadTree.js</strong> <span class="js-clippy mini-icon mini-icon-clippy " data-clipboard-text="JavaScript/QuadTree/src/QuadTree.js" data-copied-hint="copied!" data-copy-hint="copy to clipboard"></span>
    </div>

      
  <div class="commit file-history-tease js-blob-contributors-content" data-path="JavaScript/QuadTree/src/QuadTree.js/">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/7786885cb16d2e55d7c8d06bd033a3d8?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
    <span class="author"><a href="/mikechambers">mikechambers</a></span>
    <time class="js-relative-date" datetime="2011-03-21T09:48:30-07:00" title="2011-03-21 09:48:30">March 21, 2011</time>
    <div class="commit-title">
        <a href="/mikechambers/ExamplesByMesh/commit/1d111c1af30c7172bbfa0d718bb6176504501a80" class="message">removed some out of date comments</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong> contributor</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2>Users on GitHub who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/7786885cb16d2e55d7c8d06bd033a3d8?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="24" />
          <a href="/mikechambers">mikechambers</a>
        </li>
      </ul>
    </div>
  </div>


    <div class="frames">
      <div class="frame frame-center" data-path="JavaScript/QuadTree/src/QuadTree.js/" data-permalink-url="/mikechambers/ExamplesByMesh/blob/5873016531936bb32ff7e3b037bc973ec45f7329/JavaScript/QuadTree/src/QuadTree.js" data-title="ExamplesByMesh/JavaScript/QuadTree/src/QuadTree.js at master · mikechambers/ExamplesByMesh · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon mini-icon-text-file"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>431 lines (346 sloc)</span>
                <span>8.943 kb</span>
              </div>
              <ul class="button-group actions">
                  <li>
                    <a class="grouped-button file-edit-link minibutton bigger lighter js-rewrite-sha" href="/mikechambers/ExamplesByMesh/edit/5873016531936bb32ff7e3b037bc973ec45f7329/JavaScript/QuadTree/src/QuadTree.js" data-method="post" rel="nofollow" data-hotkey="e">Edit</a>
                  </li>

                <li>
                  <a href="/mikechambers/ExamplesByMesh/raw/master/JavaScript/QuadTree/src/QuadTree.js" class="minibutton btn-raw grouped-button bigger lighter" id="raw-url">Raw</a>
                </li>
                  <li>
                    <a href="/mikechambers/ExamplesByMesh/blame/master/JavaScript/QuadTree/src/QuadTree.js" class="minibutton btn-blame grouped-button bigger lighter">Blame</a>
                  </li>
                <li>
                  <a href="/mikechambers/ExamplesByMesh/commits/master/JavaScript/QuadTree/src/QuadTree.js" class="minibutton btn-history grouped-button bigger lighter" rel="nofollow">History</a>
                </li>
              </ul>
            </div>
              <div class="data type-javascript">
      <table cellpadding="0" cellspacing="0" class="lines">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
<span id="L394" rel="#L394">394</span>
<span id="L395" rel="#L395">395</span>
<span id="L396" rel="#L396">396</span>
<span id="L397" rel="#L397">397</span>
<span id="L398" rel="#L398">398</span>
<span id="L399" rel="#L399">399</span>
<span id="L400" rel="#L400">400</span>
<span id="L401" rel="#L401">401</span>
<span id="L402" rel="#L402">402</span>
<span id="L403" rel="#L403">403</span>
<span id="L404" rel="#L404">404</span>
<span id="L405" rel="#L405">405</span>
<span id="L406" rel="#L406">406</span>
<span id="L407" rel="#L407">407</span>
<span id="L408" rel="#L408">408</span>
<span id="L409" rel="#L409">409</span>
<span id="L410" rel="#L410">410</span>
<span id="L411" rel="#L411">411</span>
<span id="L412" rel="#L412">412</span>
<span id="L413" rel="#L413">413</span>
<span id="L414" rel="#L414">414</span>
<span id="L415" rel="#L415">415</span>
<span id="L416" rel="#L416">416</span>
<span id="L417" rel="#L417">417</span>
<span id="L418" rel="#L418">418</span>
<span id="L419" rel="#L419">419</span>
<span id="L420" rel="#L420">420</span>
<span id="L421" rel="#L421">421</span>
<span id="L422" rel="#L422">422</span>
<span id="L423" rel="#L423">423</span>
<span id="L424" rel="#L424">424</span>
<span id="L425" rel="#L425">425</span>
<span id="L426" rel="#L426">426</span>
<span id="L427" rel="#L427">427</span>
<span id="L428" rel="#L428">428</span>
<span id="L429" rel="#L429">429</span>
<span id="L430" rel="#L430">430</span>
<span id="L431" rel="#L431">431</span>
</pre>
          </td>
          <td width="100%">
                <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/*</span></div><div class='line' id='LC2'><span class="cm">	The MIT License</span></div><div class='line' id='LC3'><br/></div><div class='line' id='LC4'><span class="cm">	Copyright (c) 2011 Mike Chambers</span></div><div class='line' id='LC5'><br/></div><div class='line' id='LC6'><span class="cm">	Permission is hereby granted, free of charge, to any person obtaining a copy</span></div><div class='line' id='LC7'><span class="cm">	of this software and associated documentation files (the &quot;Software&quot;), to deal</span></div><div class='line' id='LC8'><span class="cm">	in the Software without restriction, including without limitation the rights</span></div><div class='line' id='LC9'><span class="cm">	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell</span></div><div class='line' id='LC10'><span class="cm">	copies of the Software, and to permit persons to whom the Software is</span></div><div class='line' id='LC11'><span class="cm">	furnished to do so, subject to the following conditions:</span></div><div class='line' id='LC12'><br/></div><div class='line' id='LC13'><span class="cm">	The above copyright notice and this permission notice shall be included in</span></div><div class='line' id='LC14'><span class="cm">	all copies or substantial portions of the Software.</span></div><div class='line' id='LC15'><br/></div><div class='line' id='LC16'><span class="cm">	THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR</span></div><div class='line' id='LC17'><span class="cm">	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,</span></div><div class='line' id='LC18'><span class="cm">	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE</span></div><div class='line' id='LC19'><span class="cm">	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER</span></div><div class='line' id='LC20'><span class="cm">	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,</span></div><div class='line' id='LC21'><span class="cm">	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN</span></div><div class='line' id='LC22'><span class="cm">	THE SOFTWARE.</span></div><div class='line' id='LC23'><span class="cm">*/</span></div><div class='line' id='LC24'><br/></div><div class='line' id='LC25'><br/></div><div class='line' id='LC26'><span class="cm">/**</span></div><div class='line' id='LC27'><span class="cm">* A QuadTree implementation in JavaScript, a 2d spatial subdivision algorithm.</span></div><div class='line' id='LC28'><span class="cm">* @module QuadTree</span></div><div class='line' id='LC29'><span class="cm">**/</span></div><div class='line' id='LC30'><br/></div><div class='line' id='LC31'><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nb">window</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC32'><br/></div><div class='line' id='LC33'><span class="cm">/****************** QuadTree ****************/</span></div><div class='line' id='LC34'><br/></div><div class='line' id='LC35'><span class="cm">/**</span></div><div class='line' id='LC36'><span class="cm">* QuadTree data structure.</span></div><div class='line' id='LC37'><span class="cm">* @class QuadTree</span></div><div class='line' id='LC38'><span class="cm">* @constructor</span></div><div class='line' id='LC39'><span class="cm">* @param {Object} An object representing the bounds of the top level of the QuadTree. The object </span></div><div class='line' id='LC40'><span class="cm">* should contain the following properties : x, y, width, height</span></div><div class='line' id='LC41'><span class="cm">* @param {Boolean} pointQuad Whether the QuadTree will contain points (true), or items with bounds </span></div><div class='line' id='LC42'><span class="cm">* (width / height)(false). Default value is false.</span></div><div class='line' id='LC43'><span class="cm">* @param {Number} maxDepth The maximum number of levels that the quadtree will create. Default is 4.</span></div><div class='line' id='LC44'><span class="cm">* @param {Number} maxChildren The maximum number of children that a node can contain before it is split into sub-nodes.</span></div><div class='line' id='LC45'><span class="cm">**/</span></div><div class='line' id='LC46'><span class="kd">function</span> <span class="nx">QuadTree</span><span class="p">(</span><span class="nx">bounds</span><span class="p">,</span> <span class="nx">pointQuad</span><span class="p">,</span> <span class="nx">maxDepth</span><span class="p">,</span> <span class="nx">maxChildren</span><span class="p">)</span></div><div class='line' id='LC47'><span class="p">{</span>	</div><div class='line' id='LC48'>	<span class="kd">var</span> <span class="nx">node</span><span class="p">;</span></div><div class='line' id='LC49'>	<span class="k">if</span><span class="p">(</span><span class="nx">pointQuad</span><span class="p">)</span></div><div class='line' id='LC50'>	<span class="p">{</span></div><div class='line' id='LC51'><br/></div><div class='line' id='LC52'>		<span class="nx">node</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Node</span><span class="p">(</span><span class="nx">bounds</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">maxDepth</span><span class="p">,</span> <span class="nx">maxChildren</span><span class="p">);</span></div><div class='line' id='LC53'>	<span class="p">}</span></div><div class='line' id='LC54'>	<span class="k">else</span></div><div class='line' id='LC55'>	<span class="p">{</span></div><div class='line' id='LC56'>		<span class="nx">node</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">BoundsNode</span><span class="p">(</span><span class="nx">bounds</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">maxDepth</span><span class="p">,</span> <span class="nx">maxChildren</span><span class="p">);</span></div><div class='line' id='LC57'>	<span class="p">}</span></div><div class='line' id='LC58'><br/></div><div class='line' id='LC59'>	<span class="k">this</span><span class="p">.</span><span class="nx">root</span> <span class="o">=</span> <span class="nx">node</span><span class="p">;</span></div><div class='line' id='LC60'><span class="p">}</span></div><div class='line' id='LC61'><br/></div><div class='line' id='LC62'><span class="cm">/**</span></div><div class='line' id='LC63'><span class="cm">* The root node of the QuadTree which covers the entire area being segmented.</span></div><div class='line' id='LC64'><span class="cm">* @property root</span></div><div class='line' id='LC65'><span class="cm">* @type Node</span></div><div class='line' id='LC66'><span class="cm">**/</span></div><div class='line' id='LC67'><span class="nx">QuadTree</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">root</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC68'><br/></div><div class='line' id='LC69'><br/></div><div class='line' id='LC70'><span class="cm">/**</span></div><div class='line' id='LC71'><span class="cm">* Inserts an item into the QuadTree.</span></div><div class='line' id='LC72'><span class="cm">* @method insert</span></div><div class='line' id='LC73'><span class="cm">* @param {Object|Array} item The item or Array of items to be inserted into the QuadTree. The item should expose x, y </span></div><div class='line' id='LC74'><span class="cm">* properties that represents its position in 2D space.</span></div><div class='line' id='LC75'><span class="cm">**/</span></div><div class='line' id='LC76'><span class="nx">QuadTree</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">insert</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">item</span><span class="p">)</span></div><div class='line' id='LC77'><span class="p">{</span></div><div class='line' id='LC78'>	<span class="k">if</span><span class="p">(</span><span class="nx">item</span> <span class="k">instanceof</span> <span class="nb">Array</span><span class="p">)</span></div><div class='line' id='LC79'>	<span class="p">{</span></div><div class='line' id='LC80'>		<span class="kd">var</span> <span class="nx">len</span> <span class="o">=</span> <span class="nx">item</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC81'><br/></div><div class='line' id='LC82'>		<span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">len</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span></div><div class='line' id='LC83'>		<span class="p">{</span></div><div class='line' id='LC84'>			<span class="k">this</span><span class="p">.</span><span class="nx">root</span><span class="p">.</span><span class="nx">insert</span><span class="p">(</span><span class="nx">item</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span></div><div class='line' id='LC85'>		<span class="p">}</span></div><div class='line' id='LC86'>	<span class="p">}</span></div><div class='line' id='LC87'>	<span class="k">else</span></div><div class='line' id='LC88'>	<span class="p">{</span></div><div class='line' id='LC89'>		<span class="k">this</span><span class="p">.</span><span class="nx">root</span><span class="p">.</span><span class="nx">insert</span><span class="p">(</span><span class="nx">item</span><span class="p">);</span></div><div class='line' id='LC90'>	<span class="p">}</span></div><div class='line' id='LC91'><span class="p">}</span></div><div class='line' id='LC92'><br/></div><div class='line' id='LC93'><span class="cm">/**</span></div><div class='line' id='LC94'><span class="cm">* Clears all nodes and children from the QuadTree</span></div><div class='line' id='LC95'><span class="cm">* @method clear</span></div><div class='line' id='LC96'><span class="cm">**/</span></div><div class='line' id='LC97'><span class="nx">QuadTree</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">clear</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span></div><div class='line' id='LC98'><span class="p">{</span></div><div class='line' id='LC99'>	<span class="k">this</span><span class="p">.</span><span class="nx">root</span><span class="p">.</span><span class="nx">clear</span><span class="p">();</span></div><div class='line' id='LC100'><span class="p">}</span></div><div class='line' id='LC101'><br/></div><div class='line' id='LC102'><span class="cm">/**</span></div><div class='line' id='LC103'><span class="cm">* Retrieves all items / points in the same node as the specified item / point. If the specified item</span></div><div class='line' id='LC104'><span class="cm">* overlaps the bounds of a node, then all children in both nodes will be returned.</span></div><div class='line' id='LC105'><span class="cm">* @method retrieve</span></div><div class='line' id='LC106'><span class="cm">* @param {Object} item An object representing a 2D coordinate point (with x, y properties), or a shape</span></div><div class='line' id='LC107'><span class="cm">* with dimensions (x, y, width, height) properties.</span></div><div class='line' id='LC108'><span class="cm">**/</span></div><div class='line' id='LC109'><span class="nx">QuadTree</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">retrieve</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">item</span><span class="p">)</span></div><div class='line' id='LC110'><span class="p">{</span></div><div class='line' id='LC111'>	<span class="c1">//get a copy of the array of items</span></div><div class='line' id='LC112'>	<span class="kd">var</span> <span class="nx">out</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">root</span><span class="p">.</span><span class="nx">retrieve</span><span class="p">(</span><span class="nx">item</span><span class="p">).</span><span class="nx">slice</span><span class="p">(</span><span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC113'>	<span class="k">return</span> <span class="nx">out</span><span class="p">;</span></div><div class='line' id='LC114'><span class="p">}</span></div><div class='line' id='LC115'><br/></div><div class='line' id='LC116'><span class="cm">/************** Node ********************/</span></div><div class='line' id='LC117'><br/></div><div class='line' id='LC118'><br/></div><div class='line' id='LC119'><span class="kd">function</span> <span class="nx">Node</span><span class="p">(</span><span class="nx">bounds</span><span class="p">,</span> <span class="nx">depth</span><span class="p">,</span> <span class="nx">maxDepth</span><span class="p">,</span> <span class="nx">maxChildren</span><span class="p">)</span></div><div class='line' id='LC120'><span class="p">{</span></div><div class='line' id='LC121'>	<span class="k">this</span><span class="p">.</span><span class="nx">_bounds</span> <span class="o">=</span> <span class="nx">bounds</span><span class="p">;</span></div><div class='line' id='LC122'>	<span class="k">this</span><span class="p">.</span><span class="nx">children</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC123'>	<span class="k">this</span><span class="p">.</span><span class="nx">nodes</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC124'><br/></div><div class='line' id='LC125'>	<span class="k">if</span><span class="p">(</span><span class="nx">maxChildren</span><span class="p">)</span></div><div class='line' id='LC126'>	<span class="p">{</span></div><div class='line' id='LC127'>		<span class="k">this</span><span class="p">.</span><span class="nx">_maxChildren</span> <span class="o">=</span> <span class="nx">maxChildren</span><span class="p">;</span></div><div class='line' id='LC128'><br/></div><div class='line' id='LC129'>	<span class="p">}</span></div><div class='line' id='LC130'><br/></div><div class='line' id='LC131'>	<span class="k">if</span><span class="p">(</span><span class="nx">maxDepth</span><span class="p">)</span></div><div class='line' id='LC132'>	<span class="p">{</span></div><div class='line' id='LC133'>		<span class="k">this</span><span class="p">.</span><span class="nx">_maxDepth</span> <span class="o">=</span> <span class="nx">maxDepth</span><span class="p">;</span></div><div class='line' id='LC134'>	<span class="p">}</span></div><div class='line' id='LC135'><br/></div><div class='line' id='LC136'>	<span class="k">if</span><span class="p">(</span><span class="nx">depth</span><span class="p">)</span></div><div class='line' id='LC137'>	<span class="p">{</span></div><div class='line' id='LC138'>		<span class="k">this</span><span class="p">.</span><span class="nx">_depth</span> <span class="o">=</span> <span class="nx">depth</span><span class="p">;</span></div><div class='line' id='LC139'>	<span class="p">}</span></div><div class='line' id='LC140'><span class="p">}</span></div><div class='line' id='LC141'><br/></div><div class='line' id='LC142'><span class="c1">//subnodes</span></div><div class='line' id='LC143'><span class="nx">Node</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">nodes</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC144'><span class="nx">Node</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">_classConstructor</span> <span class="o">=</span> <span class="nx">Node</span><span class="p">;</span></div><div class='line' id='LC145'><br/></div><div class='line' id='LC146'><span class="c1">//children contained directly in the node</span></div><div class='line' id='LC147'><span class="nx">Node</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">children</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC148'><span class="nx">Node</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">_bounds</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC149'><br/></div><div class='line' id='LC150'><span class="c1">//read only</span></div><div class='line' id='LC151'><span class="nx">Node</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">_depth</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC152'><br/></div><div class='line' id='LC153'><span class="nx">Node</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">_maxChildren</span> <span class="o">=</span> <span class="mi">4</span><span class="p">;</span></div><div class='line' id='LC154'><span class="nx">Node</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">_maxDepth</span> <span class="o">=</span> <span class="mi">4</span><span class="p">;</span></div><div class='line' id='LC155'><br/></div><div class='line' id='LC156'><span class="nx">Node</span><span class="p">.</span><span class="nx">TOP_LEFT</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC157'><span class="nx">Node</span><span class="p">.</span><span class="nx">TOP_RIGHT</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC158'><span class="nx">Node</span><span class="p">.</span><span class="nx">BOTTOM_LEFT</span> <span class="o">=</span> <span class="mi">2</span><span class="p">;</span></div><div class='line' id='LC159'><span class="nx">Node</span><span class="p">.</span><span class="nx">BOTTOM_RIGHT</span> <span class="o">=</span> <span class="mi">3</span><span class="p">;</span></div><div class='line' id='LC160'><br/></div><div class='line' id='LC161'><br/></div><div class='line' id='LC162'><span class="nx">Node</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">insert</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">item</span><span class="p">)</span></div><div class='line' id='LC163'><span class="p">{</span></div><div class='line' id='LC164'>	<span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">nodes</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span></div><div class='line' id='LC165'>	<span class="p">{</span></div><div class='line' id='LC166'>		<span class="kd">var</span> <span class="nx">index</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_findIndex</span><span class="p">(</span><span class="nx">item</span><span class="p">);</span></div><div class='line' id='LC167'><br/></div><div class='line' id='LC168'>		<span class="k">this</span><span class="p">.</span><span class="nx">nodes</span><span class="p">[</span><span class="nx">index</span><span class="p">].</span><span class="nx">insert</span><span class="p">(</span><span class="nx">item</span><span class="p">);</span></div><div class='line' id='LC169'><br/></div><div class='line' id='LC170'>		<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC171'>	<span class="p">}</span></div><div class='line' id='LC172'><br/></div><div class='line' id='LC173'>	<span class="k">this</span><span class="p">.</span><span class="nx">children</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">item</span><span class="p">);</span></div><div class='line' id='LC174'><br/></div><div class='line' id='LC175'>	<span class="kd">var</span> <span class="nx">len</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">children</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC176'>	<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_depth</span> <span class="o">&gt;=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_maxDepth</span><span class="p">)</span> <span class="o">&amp;&amp;</span> </div><div class='line' id='LC177'>		<span class="nx">len</span> <span class="o">&gt;</span> <span class="k">this</span><span class="p">.</span><span class="nx">_maxChildren</span><span class="p">)</span></div><div class='line' id='LC178'>	<span class="p">{</span></div><div class='line' id='LC179'>		<span class="k">this</span><span class="p">.</span><span class="nx">subdivide</span><span class="p">();</span></div><div class='line' id='LC180'><br/></div><div class='line' id='LC181'>		<span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">len</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span></div><div class='line' id='LC182'>		<span class="p">{</span></div><div class='line' id='LC183'>			<span class="k">this</span><span class="p">.</span><span class="nx">insert</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">children</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span></div><div class='line' id='LC184'>		<span class="p">}</span></div><div class='line' id='LC185'><br/></div><div class='line' id='LC186'>		<span class="k">this</span><span class="p">.</span><span class="nx">children</span><span class="p">.</span><span class="nx">length</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC187'>	<span class="p">}</span></div><div class='line' id='LC188'><span class="p">}</span></div><div class='line' id='LC189'><br/></div><div class='line' id='LC190'><span class="nx">Node</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">retrieve</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">item</span><span class="p">)</span></div><div class='line' id='LC191'><span class="p">{</span></div><div class='line' id='LC192'>	<span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">nodes</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span></div><div class='line' id='LC193'>	<span class="p">{</span></div><div class='line' id='LC194'>		<span class="kd">var</span> <span class="nx">index</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_findIndex</span><span class="p">(</span><span class="nx">item</span><span class="p">);</span></div><div class='line' id='LC195'><br/></div><div class='line' id='LC196'>		<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">nodes</span><span class="p">[</span><span class="nx">index</span><span class="p">].</span><span class="nx">retrieve</span><span class="p">(</span><span class="nx">item</span><span class="p">);</span></div><div class='line' id='LC197'>	<span class="p">}</span></div><div class='line' id='LC198'><br/></div><div class='line' id='LC199'>	<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">children</span><span class="p">;</span></div><div class='line' id='LC200'><span class="p">}</span></div><div class='line' id='LC201'><br/></div><div class='line' id='LC202'><span class="nx">Node</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">_findIndex</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">item</span><span class="p">)</span></div><div class='line' id='LC203'><span class="p">{</span></div><div class='line' id='LC204'>	<span class="kd">var</span> <span class="nx">b</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_bounds</span><span class="p">;</span></div><div class='line' id='LC205'>	<span class="kd">var</span> <span class="nx">left</span> <span class="o">=</span> <span class="p">(</span><span class="nx">item</span><span class="p">.</span><span class="nx">x</span> <span class="o">&gt;</span> <span class="nx">b</span><span class="p">.</span><span class="nx">x</span> <span class="o">+</span> <span class="nx">b</span><span class="p">.</span><span class="nx">width</span> <span class="o">/</span> <span class="mi">2</span><span class="p">)</span><span class="o">?</span> <span class="kc">false</span> <span class="o">:</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC206'>	<span class="kd">var</span> <span class="nx">top</span> <span class="o">=</span> <span class="p">(</span><span class="nx">item</span><span class="p">.</span><span class="nx">y</span> <span class="o">&gt;</span> <span class="nx">b</span><span class="p">.</span><span class="nx">y</span> <span class="o">+</span> <span class="nx">b</span><span class="p">.</span><span class="nx">height</span> <span class="o">/</span> <span class="mi">2</span><span class="p">)</span><span class="o">?</span> <span class="kc">false</span> <span class="o">:</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC207'><br/></div><div class='line' id='LC208'>	<span class="c1">//top left</span></div><div class='line' id='LC209'>	<span class="kd">var</span> <span class="nx">index</span> <span class="o">=</span> <span class="nx">Node</span><span class="p">.</span><span class="nx">TOP_LEFT</span><span class="p">;</span></div><div class='line' id='LC210'>	<span class="k">if</span><span class="p">(</span><span class="nx">left</span><span class="p">)</span></div><div class='line' id='LC211'>	<span class="p">{</span></div><div class='line' id='LC212'>		<span class="c1">//left side</span></div><div class='line' id='LC213'>		<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">top</span><span class="p">)</span></div><div class='line' id='LC214'>		<span class="p">{</span></div><div class='line' id='LC215'>			<span class="c1">//bottom left</span></div><div class='line' id='LC216'>			<span class="nx">index</span> <span class="o">=</span> <span class="nx">Node</span><span class="p">.</span><span class="nx">BOTTOM_LEFT</span><span class="p">;</span></div><div class='line' id='LC217'>		<span class="p">}</span></div><div class='line' id='LC218'>	<span class="p">}</span></div><div class='line' id='LC219'>	<span class="k">else</span></div><div class='line' id='LC220'>	<span class="p">{</span></div><div class='line' id='LC221'>		<span class="c1">//right side</span></div><div class='line' id='LC222'>		<span class="k">if</span><span class="p">(</span><span class="nx">top</span><span class="p">)</span></div><div class='line' id='LC223'>		<span class="p">{</span></div><div class='line' id='LC224'>			<span class="c1">//top right</span></div><div class='line' id='LC225'>			<span class="nx">index</span> <span class="o">=</span> <span class="nx">Node</span><span class="p">.</span><span class="nx">TOP_RIGHT</span><span class="p">;</span></div><div class='line' id='LC226'>		<span class="p">}</span></div><div class='line' id='LC227'>		<span class="k">else</span></div><div class='line' id='LC228'>		<span class="p">{</span></div><div class='line' id='LC229'>			<span class="c1">//bottom right</span></div><div class='line' id='LC230'>			<span class="nx">index</span> <span class="o">=</span> <span class="nx">Node</span><span class="p">.</span><span class="nx">BOTTOM_RIGHT</span><span class="p">;</span></div><div class='line' id='LC231'>		<span class="p">}</span></div><div class='line' id='LC232'>	<span class="p">}</span></div><div class='line' id='LC233'><br/></div><div class='line' id='LC234'>	<span class="k">return</span> <span class="nx">index</span><span class="p">;</span></div><div class='line' id='LC235'><span class="p">}</span></div><div class='line' id='LC236'><br/></div><div class='line' id='LC237'><br/></div><div class='line' id='LC238'><span class="nx">Node</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">subdivide</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span></div><div class='line' id='LC239'><span class="p">{</span></div><div class='line' id='LC240'>	<span class="kd">var</span> <span class="nx">depth</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_depth</span> <span class="o">+</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC241'><br/></div><div class='line' id='LC242'>	<span class="kd">var</span> <span class="nx">bx</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_bounds</span><span class="p">.</span><span class="nx">x</span><span class="p">;</span></div><div class='line' id='LC243'>	<span class="kd">var</span> <span class="nx">by</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_bounds</span><span class="p">.</span><span class="nx">y</span><span class="p">;</span></div><div class='line' id='LC244'><br/></div><div class='line' id='LC245'>	<span class="c1">//floor the values</span></div><div class='line' id='LC246'>	<span class="kd">var</span> <span class="nx">b_w_h</span> <span class="o">=</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_bounds</span><span class="p">.</span><span class="nx">width</span> <span class="o">/</span> <span class="mi">2</span><span class="p">)</span><span class="o">|</span><span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC247'>	<span class="kd">var</span> <span class="nx">b_h_h</span> <span class="o">=</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_bounds</span><span class="p">.</span><span class="nx">height</span> <span class="o">/</span> <span class="mi">2</span><span class="p">)</span><span class="o">|</span><span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC248'>	<span class="kd">var</span> <span class="nx">bx_b_w_h</span> <span class="o">=</span> <span class="nx">bx</span> <span class="o">+</span> <span class="nx">b_w_h</span><span class="p">;</span></div><div class='line' id='LC249'>	<span class="kd">var</span> <span class="nx">by_b_h_h</span> <span class="o">=</span> <span class="nx">by</span> <span class="o">+</span> <span class="nx">b_h_h</span><span class="p">;</span></div><div class='line' id='LC250'><br/></div><div class='line' id='LC251'>	<span class="c1">//top left</span></div><div class='line' id='LC252'>	<span class="k">this</span><span class="p">.</span><span class="nx">nodes</span><span class="p">[</span><span class="nx">Node</span><span class="p">.</span><span class="nx">TOP_LEFT</span><span class="p">]</span> <span class="o">=</span> <span class="k">new</span> <span class="k">this</span><span class="p">.</span><span class="nx">_classConstructor</span><span class="p">({</span></div><div class='line' id='LC253'>		<span class="nx">x</span><span class="o">:</span><span class="nx">bx</span><span class="p">,</span> </div><div class='line' id='LC254'>		<span class="nx">y</span><span class="o">:</span><span class="nx">by</span><span class="p">,</span> </div><div class='line' id='LC255'>		<span class="nx">width</span><span class="o">:</span><span class="nx">b_w_h</span><span class="p">,</span> </div><div class='line' id='LC256'>		<span class="nx">height</span><span class="o">:</span><span class="nx">b_h_h</span></div><div class='line' id='LC257'>	<span class="p">},</span> </div><div class='line' id='LC258'>	<span class="nx">depth</span><span class="p">);</span></div><div class='line' id='LC259'><br/></div><div class='line' id='LC260'>	<span class="c1">//top right</span></div><div class='line' id='LC261'>	<span class="k">this</span><span class="p">.</span><span class="nx">nodes</span><span class="p">[</span><span class="nx">Node</span><span class="p">.</span><span class="nx">TOP_RIGHT</span><span class="p">]</span> <span class="o">=</span> <span class="k">new</span> <span class="k">this</span><span class="p">.</span><span class="nx">_classConstructor</span><span class="p">({</span></div><div class='line' id='LC262'>		<span class="nx">x</span><span class="o">:</span><span class="nx">bx_b_w_h</span><span class="p">,</span></div><div class='line' id='LC263'>		<span class="nx">y</span><span class="o">:</span><span class="nx">by</span><span class="p">,</span></div><div class='line' id='LC264'>		<span class="nx">width</span><span class="o">:</span><span class="nx">b_w_h</span><span class="p">,</span> </div><div class='line' id='LC265'>		<span class="nx">height</span><span class="o">:</span><span class="nx">b_h_h</span></div><div class='line' id='LC266'>	<span class="p">},</span></div><div class='line' id='LC267'>	<span class="nx">depth</span><span class="p">);</span></div><div class='line' id='LC268'><br/></div><div class='line' id='LC269'>	<span class="c1">//bottom left</span></div><div class='line' id='LC270'>	<span class="k">this</span><span class="p">.</span><span class="nx">nodes</span><span class="p">[</span><span class="nx">Node</span><span class="p">.</span><span class="nx">BOTTOM_LEFT</span><span class="p">]</span> <span class="o">=</span> <span class="k">new</span> <span class="k">this</span><span class="p">.</span><span class="nx">_classConstructor</span><span class="p">({</span></div><div class='line' id='LC271'>		<span class="nx">x</span><span class="o">:</span><span class="nx">bx</span><span class="p">,</span></div><div class='line' id='LC272'>		<span class="nx">y</span><span class="o">:</span><span class="nx">by_b_h_h</span><span class="p">,</span></div><div class='line' id='LC273'>		<span class="nx">width</span><span class="o">:</span><span class="nx">b_w_h</span><span class="p">,</span> </div><div class='line' id='LC274'>		<span class="nx">height</span><span class="o">:</span><span class="nx">b_h_h</span></div><div class='line' id='LC275'>	<span class="p">},</span></div><div class='line' id='LC276'>	<span class="nx">depth</span><span class="p">);</span></div><div class='line' id='LC277'><br/></div><div class='line' id='LC278'><br/></div><div class='line' id='LC279'>	<span class="c1">//bottom right</span></div><div class='line' id='LC280'>	<span class="k">this</span><span class="p">.</span><span class="nx">nodes</span><span class="p">[</span><span class="nx">Node</span><span class="p">.</span><span class="nx">BOTTOM_RIGHT</span><span class="p">]</span> <span class="o">=</span> <span class="k">new</span> <span class="k">this</span><span class="p">.</span><span class="nx">_classConstructor</span><span class="p">({</span></div><div class='line' id='LC281'>		<span class="nx">x</span><span class="o">:</span><span class="nx">bx_b_w_h</span><span class="p">,</span> </div><div class='line' id='LC282'>		<span class="nx">y</span><span class="o">:</span><span class="nx">by_b_h_h</span><span class="p">,</span></div><div class='line' id='LC283'>		<span class="nx">width</span><span class="o">:</span><span class="nx">b_w_h</span><span class="p">,</span> </div><div class='line' id='LC284'>		<span class="nx">height</span><span class="o">:</span><span class="nx">b_h_h</span></div><div class='line' id='LC285'>	<span class="p">},</span></div><div class='line' id='LC286'>	<span class="nx">depth</span><span class="p">);</span>	</div><div class='line' id='LC287'><span class="p">}</span></div><div class='line' id='LC288'><br/></div><div class='line' id='LC289'><span class="nx">Node</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">clear</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span></div><div class='line' id='LC290'><span class="p">{</span>	</div><div class='line' id='LC291'>	<span class="k">this</span><span class="p">.</span><span class="nx">children</span><span class="p">.</span><span class="nx">length</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC292'><br/></div><div class='line' id='LC293'>	<span class="kd">var</span> <span class="nx">len</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">nodes</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC294'>	<span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">len</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span></div><div class='line' id='LC295'>	<span class="p">{</span></div><div class='line' id='LC296'>		<span class="k">this</span><span class="p">.</span><span class="nx">nodes</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">clear</span><span class="p">();</span></div><div class='line' id='LC297'>	<span class="p">}</span></div><div class='line' id='LC298'><br/></div><div class='line' id='LC299'>	<span class="k">this</span><span class="p">.</span><span class="nx">nodes</span><span class="p">.</span><span class="nx">length</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC300'><span class="p">}</span></div><div class='line' id='LC301'><br/></div><div class='line' id='LC302'><br/></div><div class='line' id='LC303'><span class="cm">/******************** BoundsQuadTree ****************/</span></div><div class='line' id='LC304'><br/></div><div class='line' id='LC305'><span class="kd">function</span> <span class="nx">BoundsNode</span><span class="p">(</span><span class="nx">bounds</span><span class="p">,</span> <span class="nx">depth</span><span class="p">,</span> <span class="nx">maxChildren</span><span class="p">,</span> <span class="nx">maxDepth</span><span class="p">)</span></div><div class='line' id='LC306'><span class="p">{</span></div><div class='line' id='LC307'>	<span class="nx">Node</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">bounds</span><span class="p">,</span> <span class="nx">depth</span><span class="p">,</span> <span class="nx">maxChildren</span><span class="p">,</span> <span class="nx">maxDepth</span><span class="p">);</span></div><div class='line' id='LC308'>	<span class="k">this</span><span class="p">.</span><span class="nx">_stuckChildren</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC309'><span class="p">}</span></div><div class='line' id='LC310'><br/></div><div class='line' id='LC311'><span class="nx">BoundsNode</span><span class="p">.</span><span class="nx">prototype</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Node</span><span class="p">();</span></div><div class='line' id='LC312'><span class="nx">BoundsNode</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">_classConstructor</span> <span class="o">=</span> <span class="nx">BoundsNode</span><span class="p">;</span></div><div class='line' id='LC313'><span class="nx">BoundsNode</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">_stuckChildren</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC314'><br/></div><div class='line' id='LC315'><span class="c1">//we use this to collect and conctenate items being retrieved. This way</span></div><div class='line' id='LC316'><span class="c1">//we dont have to continuously create new Array instances.</span></div><div class='line' id='LC317'><span class="c1">//Note, when returned from QuadTree.retrieve, we then copy the array</span></div><div class='line' id='LC318'><span class="nx">BoundsNode</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">_out</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC319'><br/></div><div class='line' id='LC320'><span class="nx">BoundsNode</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">insert</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">item</span><span class="p">)</span></div><div class='line' id='LC321'><span class="p">{</span>	</div><div class='line' id='LC322'>	<span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">nodes</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span></div><div class='line' id='LC323'>	<span class="p">{</span></div><div class='line' id='LC324'>		<span class="kd">var</span> <span class="nx">index</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_findIndex</span><span class="p">(</span><span class="nx">item</span><span class="p">);</span></div><div class='line' id='LC325'>		<span class="kd">var</span> <span class="nx">node</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">nodes</span><span class="p">[</span><span class="nx">index</span><span class="p">];</span></div><div class='line' id='LC326'><br/></div><div class='line' id='LC327'>		<span class="c1">//todo: make _bounds bounds</span></div><div class='line' id='LC328'>		<span class="k">if</span><span class="p">(</span><span class="nx">item</span><span class="p">.</span><span class="nx">x</span> <span class="o">&gt;=</span> <span class="nx">node</span><span class="p">.</span><span class="nx">_bounds</span><span class="p">.</span><span class="nx">x</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC329'>			<span class="nx">item</span><span class="p">.</span><span class="nx">x</span> <span class="o">+</span> <span class="nx">item</span><span class="p">.</span><span class="nx">width</span> <span class="o">&lt;=</span> <span class="nx">node</span><span class="p">.</span><span class="nx">_bounds</span><span class="p">.</span><span class="nx">x</span> <span class="o">+</span> <span class="nx">node</span><span class="p">.</span><span class="nx">_bounds</span><span class="p">.</span><span class="nx">width</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC330'>			<span class="nx">item</span><span class="p">.</span><span class="nx">y</span> <span class="o">&gt;=</span> <span class="nx">node</span><span class="p">.</span><span class="nx">_bounds</span><span class="p">.</span><span class="nx">y</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC331'>			<span class="nx">item</span><span class="p">.</span><span class="nx">y</span> <span class="o">+</span> <span class="nx">item</span><span class="p">.</span><span class="nx">height</span> <span class="o">&lt;=</span> <span class="nx">node</span><span class="p">.</span><span class="nx">_bounds</span><span class="p">.</span><span class="nx">y</span> <span class="o">+</span> <span class="nx">node</span><span class="p">.</span><span class="nx">_bounds</span><span class="p">.</span><span class="nx">height</span><span class="p">)</span></div><div class='line' id='LC332'>		<span class="p">{</span></div><div class='line' id='LC333'>			<span class="k">this</span><span class="p">.</span><span class="nx">nodes</span><span class="p">[</span><span class="nx">index</span><span class="p">].</span><span class="nx">insert</span><span class="p">(</span><span class="nx">item</span><span class="p">);</span></div><div class='line' id='LC334'>		<span class="p">}</span></div><div class='line' id='LC335'>		<span class="k">else</span></div><div class='line' id='LC336'>		<span class="p">{</span>			</div><div class='line' id='LC337'>			<span class="k">this</span><span class="p">.</span><span class="nx">_stuckChildren</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">item</span><span class="p">);</span></div><div class='line' id='LC338'>		<span class="p">}</span></div><div class='line' id='LC339'><br/></div><div class='line' id='LC340'>		<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC341'>	<span class="p">}</span></div><div class='line' id='LC342'><br/></div><div class='line' id='LC343'>	<span class="k">this</span><span class="p">.</span><span class="nx">children</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">item</span><span class="p">);</span></div><div class='line' id='LC344'><br/></div><div class='line' id='LC345'>	<span class="kd">var</span> <span class="nx">len</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">children</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC346'><br/></div><div class='line' id='LC347'>	<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_depth</span> <span class="o">&gt;=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_maxDepth</span><span class="p">)</span> <span class="o">&amp;&amp;</span> </div><div class='line' id='LC348'>		<span class="nx">len</span> <span class="o">&gt;</span> <span class="k">this</span><span class="p">.</span><span class="nx">_maxChildren</span><span class="p">)</span></div><div class='line' id='LC349'>	<span class="p">{</span></div><div class='line' id='LC350'>		<span class="k">this</span><span class="p">.</span><span class="nx">subdivide</span><span class="p">();</span></div><div class='line' id='LC351'><br/></div><div class='line' id='LC352'>		<span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">len</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span></div><div class='line' id='LC353'>		<span class="p">{</span></div><div class='line' id='LC354'>			<span class="k">this</span><span class="p">.</span><span class="nx">insert</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">children</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span></div><div class='line' id='LC355'>		<span class="p">}</span></div><div class='line' id='LC356'><br/></div><div class='line' id='LC357'>		<span class="k">this</span><span class="p">.</span><span class="nx">children</span><span class="p">.</span><span class="nx">length</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC358'>	<span class="p">}</span></div><div class='line' id='LC359'><span class="p">}</span></div><div class='line' id='LC360'><br/></div><div class='line' id='LC361'><span class="nx">BoundsNode</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">getChildren</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span></div><div class='line' id='LC362'><span class="p">{</span></div><div class='line' id='LC363'>	<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">children</span><span class="p">.</span><span class="nx">concat</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_stuckChildren</span><span class="p">);</span></div><div class='line' id='LC364'><span class="p">}</span></div><div class='line' id='LC365'><br/></div><div class='line' id='LC366'><span class="nx">BoundsNode</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">retrieve</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">item</span><span class="p">)</span></div><div class='line' id='LC367'><span class="p">{</span></div><div class='line' id='LC368'>	<span class="kd">var</span> <span class="nx">out</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_out</span><span class="p">;</span></div><div class='line' id='LC369'>	<span class="nx">out</span><span class="p">.</span><span class="nx">length</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC370'>	<span class="k">if</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">nodes</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span></div><div class='line' id='LC371'>	<span class="p">{</span></div><div class='line' id='LC372'>		<span class="kd">var</span> <span class="nx">index</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_findIndex</span><span class="p">(</span><span class="nx">item</span><span class="p">);</span></div><div class='line' id='LC373'><br/></div><div class='line' id='LC374'>		<span class="nx">out</span><span class="p">.</span><span class="nx">push</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">out</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">nodes</span><span class="p">[</span><span class="nx">index</span><span class="p">].</span><span class="nx">retrieve</span><span class="p">(</span><span class="nx">item</span><span class="p">));</span></div><div class='line' id='LC375'>	<span class="p">}</span></div><div class='line' id='LC376'><br/></div><div class='line' id='LC377'>	<span class="nx">out</span><span class="p">.</span><span class="nx">push</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">out</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">_stuckChildren</span><span class="p">);</span></div><div class='line' id='LC378'>	<span class="nx">out</span><span class="p">.</span><span class="nx">push</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">out</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">children</span><span class="p">);</span></div><div class='line' id='LC379'><br/></div><div class='line' id='LC380'>	<span class="k">return</span> <span class="nx">out</span><span class="p">;</span></div><div class='line' id='LC381'><span class="p">}</span></div><div class='line' id='LC382'><br/></div><div class='line' id='LC383'><span class="nx">BoundsNode</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">clear</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span></div><div class='line' id='LC384'><span class="p">{</span></div><div class='line' id='LC385'><br/></div><div class='line' id='LC386'>	<span class="k">this</span><span class="p">.</span><span class="nx">_stuckChildren</span><span class="p">.</span><span class="nx">length</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC387'><br/></div><div class='line' id='LC388'>	<span class="c1">//array</span></div><div class='line' id='LC389'>	<span class="k">this</span><span class="p">.</span><span class="nx">children</span><span class="p">.</span><span class="nx">length</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC390'><br/></div><div class='line' id='LC391'>	<span class="kd">var</span> <span class="nx">len</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">nodes</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC392'><br/></div><div class='line' id='LC393'>	<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">len</span><span class="p">)</span></div><div class='line' id='LC394'>	<span class="p">{</span></div><div class='line' id='LC395'>		<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC396'>	<span class="p">}</span></div><div class='line' id='LC397'><br/></div><div class='line' id='LC398'>	<span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">len</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span></div><div class='line' id='LC399'>	<span class="p">{</span></div><div class='line' id='LC400'>		<span class="k">this</span><span class="p">.</span><span class="nx">nodes</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">clear</span><span class="p">();</span></div><div class='line' id='LC401'>	<span class="p">}</span></div><div class='line' id='LC402'><br/></div><div class='line' id='LC403'>	<span class="c1">//array</span></div><div class='line' id='LC404'>	<span class="k">this</span><span class="p">.</span><span class="nx">nodes</span><span class="p">.</span><span class="nx">length</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>	</div><div class='line' id='LC405'><br/></div><div class='line' id='LC406'>	<span class="c1">//we could call the super clear function but for now, im just going to inline it</span></div><div class='line' id='LC407'>	<span class="c1">//call the hidden super.clear, and make sure its called with this = this instance</span></div><div class='line' id='LC408'>	<span class="c1">//Object.getPrototypeOf(BoundsNode.prototype).clear.call(this);</span></div><div class='line' id='LC409'><span class="p">}</span></div><div class='line' id='LC410'><br/></div><div class='line' id='LC411'><span class="nx">BoundsNode</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">getChildCount</span></div><div class='line' id='LC412'><br/></div><div class='line' id='LC413'><span class="nb">window</span><span class="p">.</span><span class="nx">QuadTree</span> <span class="o">=</span> <span class="nx">QuadTree</span><span class="p">;</span></div><div class='line' id='LC414'><br/></div><div class='line' id='LC415'><span class="cm">/*</span></div><div class='line' id='LC416'><span class="cm">//http://ejohn.org/blog/objectgetprototypeof/</span></div><div class='line' id='LC417'><span class="cm">if ( typeof Object.getPrototypeOf !== &quot;function&quot; ) {</span></div><div class='line' id='LC418'><span class="cm">  if ( typeof &quot;test&quot;.__proto__ === &quot;object&quot; ) {</span></div><div class='line' id='LC419'><span class="cm">    Object.getPrototypeOf = function(object){</span></div><div class='line' id='LC420'><span class="cm">      return object.__proto__;</span></div><div class='line' id='LC421'><span class="cm">    };</span></div><div class='line' id='LC422'><span class="cm">  } else {</span></div><div class='line' id='LC423'><span class="cm">    Object.getPrototypeOf = function(object){</span></div><div class='line' id='LC424'><span class="cm">      // May break if the constructor has been tampered with</span></div><div class='line' id='LC425'><span class="cm">      return object.constructor.prototype;</span></div><div class='line' id='LC426'><span class="cm">    };</span></div><div class='line' id='LC427'><span class="cm">  }</span></div><div class='line' id='LC428'><span class="cm">}</span></div><div class='line' id='LC429'><span class="cm">*/</span></div><div class='line' id='LC430'><br/></div><div class='line' id='LC431'><span class="p">}(</span><span class="nb">window</span><span class="p">));</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>
      </div>
    </div>

  </div>

<div class="frame frame-loading large-loading-area" style="display:none;" data-tree-list-url="/mikechambers/ExamplesByMesh/tree-list/5873016531936bb32ff7e3b037bc973ec45f7329" data-blob-url-prefix="/mikechambers/ExamplesByMesh/blob/5873016531936bb32ff7e3b037bc973ec45f7329">
  <img src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-64.gif?1329872007" height="64" width="64">
</div>

        </div>
      </div>
      <div class="context-overlay"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer" >
        
  <div class="upper_footer">
     <div class="container clearfix">

       <!--[if IE]><h4 id="blacktocat_ie">GitHub Links</h4><![endif]-->
       <![if !IE]><h4 id="blacktocat">GitHub Links</h4><![endif]>

       <ul class="footer_nav">
         <h4>GitHub</h4>
         <li><a href="https://github.com/about">About</a></li>
         <li><a href="https://github.com/blog">Blog</a></li>
         <li><a href="https://github.com/features">Features</a></li>
         <li><a href="https://github.com/contact">Contact &amp; Support</a></li>
         <li><a href="https://github.com/training">Training</a></li>
         <li><a href="http://enterprise.github.com/">GitHub Enterprise</a></li>
         <li><a href="http://status.github.com/">Site Status</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Clients</h4>
         <li><a href="http://mac.github.com/">GitHub for Mac</a></li>
         <li><a href="http://windows.github.com/">GitHub for Windows</a></li>
         <li><a href="http://eclipse.github.com/">GitHub for Eclipse</a></li>
         <li><a href="http://mobile.github.com/">GitHub Mobile Apps</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Tools</h4>
         <li><a href="http://get.gaug.es/">Gauges: Web analytics</a></li>
         <li><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></li>
         <li><a href="https://gist.github.com">Gist: Code snippets</a></li>

         <h4 class="second">Extras</h4>
         <li><a href="http://jobs.github.com/">Job Board</a></li>
         <li><a href="http://shop.github.com/">GitHub Shop</a></li>
         <li><a href="http://octodex.github.com/">The Octodex</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Documentation</h4>
         <li><a href="http://help.github.com/">GitHub Help</a></li>
         <li><a href="http://developer.github.com/">Developer API</a></li>
         <li><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></li>
         <li><a href="http://pages.github.com/">GitHub Pages</a></li>
       </ul>

     </div><!-- /.site -->
  </div><!-- /.upper_footer -->

<div class="lower_footer">
  <div class="container clearfix">
    <!--[if IE]><div id="legal_ie"><![endif]-->
    <![if !IE]><div id="legal"><![endif]>
      <ul>
          <li><a href="https://github.com/site/terms">Terms of Service</a></li>
          <li><a href="https://github.com/site/privacy">Privacy</a></li>
          <li><a href="https://github.com/security">Security</a></li>
      </ul>

      <p>&copy; 2012 <span title="0.09113s from fe12.rs.github.com">GitHub</span> Inc. All rights reserved.</p>
    </div><!-- /#legal or /#legal_ie-->

      <div class="sponsor">
        <a href="http://www.rackspace.com" class="logo">
          <img alt="Dedicated Server" height="36" src="https://a248.e.akamai.net/assets.github.com/images/modules/footer/rackspaces_logo.png?1329521040" width="38" />
        </a>
        Powered by the <a href="http://www.rackspace.com ">Dedicated
        Servers</a> and<br/> <a href="http://www.rackspace.com/cloud">Cloud
        Computing</a> of Rackspace Hosting<span>&reg;</span>
      </div>
  </div><!-- /.site -->
</div><!-- /.lower_footer -->

      </div><!-- /#footer -->

    

<div id="keyboard_shortcuts_pane" class="instapaper_ignore readability-extra" style="display:none">
  <h2>Keyboard Shortcuts <small><a href="#" class="js-see-all-keyboard-shortcuts">(see all)</a></small></h2>

  <div class="columns threecols">
    <div class="column first">
      <h3>Site wide shortcuts</h3>
      <dl class="keyboard-mappings">
        <dt>s</dt>
        <dd>Focus site search</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>?</dt>
        <dd>Bring up this help dialog</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column middle" style='display:none'>
      <h3>Commit list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>c <em>or</em> o <em>or</em> enter</dt>
        <dd>Open commit</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>y</dt>
        <dd>Expand URL to its canonical form</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column last js-hidden-pane" style='display:none'>
      <h3>Pull request list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>o <em>or</em> enter</dt>
        <dd>Open issue</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
        <dd>Submit comment</dd>
      </dl>
    </div><!-- /.columns.last -->

  </div><!-- /.columns.equacols -->

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>

    <h3>Issues</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>x</dt>
          <dd>Toggle selection</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
          <dd>Submit comment</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>c</dt>
          <dd>Create issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Create label</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>i</dt>
          <dd>Back to inbox</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>u</dt>
          <dd>Back to issues</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>/</dt>
          <dd>Focus issues search</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>

    <h3>Issues Dashboard</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
      </div><!-- /.column.first -->
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>

    <h3>Network Graph</h3>
    <div class="columns equacols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt><span class="badmono">←</span> <em>or</em> h</dt>
          <dd>Scroll left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">→</span> <em>or</em> l</dt>
          <dd>Scroll right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↑</span> <em>or</em> k</dt>
          <dd>Scroll up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↓</span> <em>or</em> j</dt>
          <dd>Scroll down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Toggle visibility of head labels</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">←</span> <em>or</em> shift h</dt>
          <dd>Scroll all the way left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">→</span> <em>or</em> shift l</dt>
          <dd>Scroll all the way right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↑</span> <em>or</em> shift k</dt>
          <dd>Scroll all the way up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↓</span> <em>or</em> shift j</dt>
          <dd>Scroll all the way down</dd>
        </dl>
      </div><!-- /.column.last -->
    </div>
  </div>

  <div class="js-hidden-pane" >
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first js-hidden-pane" >
        <h3>Source Code Browsing</h3>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Activates the file finder</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Jump to line</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>w</dt>
          <dd>Switch branch/tag</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Expand URL to its canonical form</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first">
        <h3>Browsing Commits</h3>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
          <dd>Submit comment</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>escape</dt>
          <dd>Close form</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>p</dt>
          <dd>Parent commit</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o</dt>
          <dd>Other parent commit</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>
    <h3>Notifications</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open notification</dd>
        </dl>
      </div><!-- /.column.first -->

      <div class="column second">
        <dl class="keyboard-mappings">
          <dt>e <em>or</em> shift i <em>or</em> y</dt>
          <dd>Mark as read</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift m</dt>
          <dd>Mute thread</dd>
        </dl>
      </div><!-- /.column.first -->
    </div>
  </div>

</div>

    <div id="markdown-help" class="instapaper_ignore readability-extra">
  <h2>Markdown Cheat Sheet</h2>

  <div class="cheatsheet-content">

  <div class="mod">
    <div class="col">
      <h3>Format Text</h3>
      <p>Headers</p>
      <pre>
# This is an &lt;h1&gt; tag
## This is an &lt;h2&gt; tag
###### This is an &lt;h6&gt; tag</pre>
     <p>Text styles</p>
     <pre>
*This text will be italic*
_This will also be italic_
**This text will be bold**
__This will also be bold__

*You **can** combine them*
</pre>
    </div>
    <div class="col">
      <h3>Lists</h3>
      <p>Unordered</p>
      <pre>
* Item 1
* Item 2
  * Item 2a
  * Item 2b</pre>
     <p>Ordered</p>
     <pre>
1. Item 1
2. Item 2
3. Item 3
   * Item 3a
   * Item 3b</pre>
    </div>
    <div class="col">
      <h3>Miscellaneous</h3>
      <p>Images</p>
      <pre>
![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)
</pre>
     <p>Links</p>
     <pre>
http://github.com - automatic!
[GitHub](http://github.com)</pre>
<p>Blockquotes</p>
     <pre>
As Kanye West said:

> We're living the future so
> the present is our past.
</pre>
    </div>
  </div>
  <div class="rule"></div>

  <h3>Code Examples in Markdown</h3>
  <div class="col">
      <p>Syntax highlighting with <a href="http://github.github.com/github-flavored-markdown/" title="GitHub Flavored Markdown" target="_blank">GFM</a></p>
      <pre>
```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```</pre>
    </div>
    <div class="col">
      <p>Or, indent your code 4 spaces</p>
      <pre>
Here is a Python code example
without syntax highlighting:

    def foo:
      if not bar:
        return true</pre>
    </div>
    <div class="col">
      <p>Inline code for comments</p>
      <pre>
I think you should use an
`&lt;addr&gt;` element here instead.</pre>
    </div>
  </div>

  </div>
</div>


    <div id="ajax-error-message">
      <span class="mini-icon mini-icon-exclamation"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="ajax-error-dismiss">Dismiss</a>
    </div>

    <div id="logo-popup">
      <h2>Looking for the GitHub logo?</h2>
      <ul>
        <li>
          <h4>GitHub Logo</h4>
          <a href="http://github-media-downloads.s3.amazonaws.com/GitHub_Logos.zip"><img alt="Github_logo" src="https://a248.e.akamai.net/assets.github.com/images/modules/about_page/github_logo.png?1315937721" /></a>
          <a href="http://github-media-downloads.s3.amazonaws.com/GitHub_Logos.zip" class="minibutton btn-download download">Download</a>
        </li>
        <li>
          <h4>The Octocat</h4>
          <a href="http://github-media-downloads.s3.amazonaws.com/Octocats.zip"><img alt="Octocat" src="https://a248.e.akamai.net/assets.github.com/images/modules/about_page/octocat.png?1315937721" /></a>
          <a href="http://github-media-downloads.s3.amazonaws.com/Octocats.zip" class="minibutton btn-download download">Download</a>
        </li>
      </ul>
    </div>

    
    <span id='server_response_time' data-time='0.10447' data-host='fe12'></span>
  </body>
</html>

